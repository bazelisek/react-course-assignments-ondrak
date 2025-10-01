import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
    test('hello world text renders', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        // ...Nothing

        // Assert
        const helloWorldElement = screen.getByText(/Hello World!/i);
        expect(helloWorldElement).toBeInTheDocument()
    });
    test('renders good to see you if button was not clicked', () => {
        render(<Greeting/>);

        const greetingElement = screen.getByText(/It's good to see you!/i);
        expect(greetingElement).toBeInTheDocument()
    });
    test('changed text renders if button was clicked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedElement = screen.getByText(/changed/i, {exact: false});
        expect(changedElement).toBeInTheDocument()
    });
    test('does not render good to see you if button was not clicked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const greetingElement = screen.queryByText(/It's good to see you!/i);
        expect(greetingElement).toBeNull();
    })
})

