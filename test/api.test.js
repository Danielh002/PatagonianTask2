const expect  = require('chai').expect;
const request = require('supertest');
const app = require('../server')
const mongoHandler = require('../src/services/mongoHandler')


afterEach(() => {
})

describe('Testing API', () => {
    beforeEach(() => {
    });

    it('Uplaod csv', (done) => {
        console.log(__dirname)
        request(app).post('/api/uploadfile')
            .set('Content-type', 'multipart/form-data')
            .field('provider', 'TEST1')
            .attach('uploadfile', __basedir + '/files/cars.csv')
            .expect(200)
            .then((res) => {
                expect(res.body).to.contain.property('msg');
                expect(res.body).to.contain.property('result');
            })
            .catch((err) => console.log(err))
        done()
    })

    afterEach(async () => {
        await mongoHandler.clearDatabase()
        await mongoHandler.closeDatabase()
    })
})

