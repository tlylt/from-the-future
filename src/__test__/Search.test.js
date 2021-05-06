import { render, fireEvent } from "@testing-library/react"
import Search from "../components/Search"

describe('render search', () => {
    it('should render search', () => {
        const { getByRole, queryByRole } = render(<Search />);
        expect(getByRole('textbox')).toBeInTheDocument();
        expect(getByRole('button', {
            name: /sort by/i
        })).toBeInTheDocument();
        expect(queryByRole('menu')).not.toBeInTheDocument();

    })
    it('should open sort tab', () => {
        const { getByRole } = render(<Search />);
        const sortByBtn = getByRole('button', {
            name: /sort by/i
        });
        fireEvent.click(sortByBtn);
        expect(getByRole('menu')).toBeInTheDocument();
    })
})