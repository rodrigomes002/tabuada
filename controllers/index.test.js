const indexController = require('./index')
const sinon = require('sinon')

describe('index controller', ()=>{
    it('renders home', ()=>{
        let request = {
            render: function(){}
        }
        let mock = sinon.mock(request)
        mock.expects('render').once().withArgs('home')
        indexController.home({}, request)
    })
})