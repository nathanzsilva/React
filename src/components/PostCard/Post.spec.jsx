import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock"

const props = postCardPropsMock;

describe("<PostCard />", () => {
    test("should render PostCard correctly", () => {
        render(<PostCard {...props} />)

        expect.assertions(3);

        expect(screen.getByAltText(/title1/i))
            .toHaveAttribute('src', props.cover);

        expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();

        expect(screen.getByText('body1')).toBeInTheDocument();
    })
    
    test("should match snapshot", () => {
        const { container } = render(<PostCard {...props} />)
        expect(container.firstChild).toMatchSnapshot();
    })
}) 