import { render, screen } from "@testing-library/react"
import { Button } from "."
import userEvent from "@testing-library/user-event"

describe("<Button />", () => {
    test("should render the button with the text 'Load More'", () => {
        render(<Button text="Load more" />)

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i })
        expect(button).toBeInTheDocument();
    })

    test('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onclick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
    })


    test('should be disabled when disabled is true', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onclick={fn} disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeDisabled();
    })

    test('should be disabled when disabled is false', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onclick={fn} disabled={false} />)

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeEnabled();
    })

    test('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<Button text="Load more" onclick={fn} disabled={false} />)

        expect(container.firstChild).toMatchSnapshot();

    })
})