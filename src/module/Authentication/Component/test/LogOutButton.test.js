import { fireEvent, render, screen } from '@testing-library/react'
import LogOutButton from '../LogOutButton'

test('testing logOut button', () => {
    render(<LogOutButton/>)
    const button = screen.getByRole('button')
    fireEvent.click(button)

})