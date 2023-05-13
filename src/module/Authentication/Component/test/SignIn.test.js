import SignIn from "../SignIn";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../../../setupTest"

describe("SignIn Component", () => {

    test('obsahuje component input', () => {
        render(<BrowserRouter><SignIn /></BrowserRouter>);

        const input = screen.getByTestId('userNameTestInput')
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });

    test("vlozenie textu do inputu a kontrola", () => {
        render(<BrowserRouter><SignIn /></BrowserRouter>);

        const input = screen.getByTestId('userNameTestInput')
        userEvent.type(input, "userName");

        expect(screen.getByTestId("userNameTestInput")).toHaveValue("userName");
    })

    test("kontrola pritomnosti buttona", () => {
        render(<BrowserRouter><SignIn /></BrowserRouter>);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()  
    })


    test("kontrola buttona eventu onClick", () => {
        render(<BrowserRouter><SignIn /></BrowserRouter>);

        const button = screen.getByRole('button')
        fireEvent.click(button)
    })

})