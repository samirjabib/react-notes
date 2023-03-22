
import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('test in useForm', () =>{
    const initialForm ={
        username:'samir',
        email:'samir.jc123@gmail.com',
        password:'1234'
    }

    test('test should be return the default value', () =>{
        const { result } = renderHook( () => useForm(initialForm))

        expect(result.current).toEqual({ //to equal is for equivalence between objects
            name:initialForm.username,
            email:initialForm.email,
            formState: initialForm,
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function)
        })
    })

    test('should be change the name of form', () =>{
        const newValue = 'juan'
        const { result } = renderHook( () => useForm(initialForm))
        const { onInputChange } = result.current

        act( () =>{
            onInputChange({target:{name:'', value:''}})
        })
    })
})