
import {render, screen} from '@testing-library/react'
import App from './App'

test('render main page correctly', () => {
   render(<App />)   
   expect(screen.getByText(/edit/i)).toBeInTheDocument()
})