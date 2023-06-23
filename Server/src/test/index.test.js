const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS",()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200',async()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            const response=(await agent.get('/rickandmorty/character/1')).body; //hay que colocar body ya que hacemos la req a la libreria supertest, tambien se puede hacer const {body}= await.... (destructuring)
            const atributes=["id", "name", "species", "gender", "status", "origin", "image"]
            const keys=Object.keys(response)
            expect(atributes.every(atribute=>keys.includes(atribute))).toBe(true)
            // atributes.forEach(atribute=>{
            //     expect(keys).toContain(atribute)
            // })
        });
        it('Si hay un error responde con status: 500',async()=>{
            await agent.get('/rickandmorty/character/MILONESA').expect(500)
        })
    })
    describe('GET /rickandmorty/login',()=>{
        it('La información es correcta y nos de acceso',async()=>{
            const {body}=await agent.get('/rickandmorty/login?email=agusvarela5@gmail.com&password=123456')
            expect(body.access).toEqual(true)
        })
        it('La información es incorrecta y no da acceso', async()=>{
            const {body}=await agent.get('/rickandmorty/login?email=andykpomaximo@gmail.com&password=12o456')
            expect(body.access).toEqual(false)
        })
    })
    describe('POST /rickandmorty/fav',()=>{
        const char1={id:1, name:'Milonesa'}
        const char2={id:2, name:'Xiiferno'}
        it('Devuelve un array con el personaje',async()=>{
            const {body}= (await agent.post('/rickandmorty/fav').send(char1));
            expect(body).toContainEqual(char1); //el toContain evalua el valor dentro del contain, evalua 1 objeto; por lo que se debe utilizar el Equal para omitir las [] que se abren al final de la respuesta
        })
        it('Al enviar mas de un elemento devuelve todos los elementos',async()=>{
            const {body}= (await agent.post('/rickandmorty/fav').send(char2));
            expect(body).toContainEqual(char1);
            expect(body).toContainEqual(char2);
        })
    })
    describe('DELETE /rickandmorty/fav/:id',()=>{
        const char1={id:1, name:'Milonesa'}
        const char2={id:2, name:'Xiiferno'}
        it('Si no se envía un ID correcto se devuelve el mismo array',async()=>{
            const {body}= await agent.delete('/rickandmorty/fav/9865')
            expect(body).toContainEqual(char1);
            expect(body).toContainEqual(char2);
        })
        it('Si se envía un ID válido se elimina al personaje',async()=>{
            const {body}= await agent.delete('/rickandmorty/fav/1')
            expect(body).not.toContainEqual(char1);
        })
    })
})