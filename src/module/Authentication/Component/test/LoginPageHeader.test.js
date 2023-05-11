import { render, fireEvent, screen } from "@testing-library/react";
import LoginPageHeader from "../LoginPageHeader";
import "../../../../setupTest"


test("testing LoginPage", () => {
    render(<LoginPageHeader />)

    const element = screen.getByText("Welcome to teacher and students databaze");
    expect(element).toBeInTheDocument()
})