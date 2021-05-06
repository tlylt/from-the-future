import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe('rendering footer', () => {
    it('should show footer', () => {
        const { getByText, getByRole } = render(<Footer shouldShow={true} />);
        expect(getByRole('contentinfo')).toBeInTheDocument();
        expect(getByText('Github')).toBeInTheDocument();
    });

    it('should not show footer', () => {
        render(<Footer shouldShow={false} />);
        expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
        expect(screen.queryByText('Github')).not.toBeInTheDocument();
    });
});