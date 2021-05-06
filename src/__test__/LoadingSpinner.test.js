import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../components/LoadingSpinner";

describe('rendering spinner', () => {
    it('should show spinner', () => {
        const { getByText, getByRole } = render(<LoadingSpinner shouldShow={true} />);
        expect(getByRole('img', { name: /spinner/i })).toBeInTheDocument();
        expect(getByText(/loading\.\.\./i)).toBeInTheDocument();
    });

    it('should not show spinner', () => {
        render(<LoadingSpinner shouldShow={false} />);
        expect(screen.queryByRole('img', { name: /spinner/i })).not.toBeInTheDocument();
        expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    });
});