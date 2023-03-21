import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetcbGifs') //Mock the custom hook


describe('Test in <GifGrid/>', () => {
    
    test('should be show loading in the init', () => {
    })
})