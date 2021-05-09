import { render, fireEvent } from "@testing-library/react";
import AdviceInfo from "../components/AdviceInfo";

describe('rendering an advice', () => {
    const deleteAdvice = jest.fn();
    const advice = { id: "121", note: "testNote", owner: "testOwner", date: "2021-05-02T12:45:50.305Z" }

    it('should render elements', () => {
        const { getByLabelText, getByRole } = render(<AdviceInfo key={advice.id} advice={advice} onDeleteAdvice={deleteAdvice} />);
        expect(getByRole('listitem')).toBeInTheDocument();
        expect(getByLabelText('hide advice')).toBeInTheDocument();
    });

    it('should render advice details', () => {
        const { getByText } = render(<AdviceInfo key={advice.id} advice={advice} onDeleteAdvice={deleteAdvice}
        />);
        expect(getByText('testNote')).toBeInTheDocument();
        expect(getByText('testOwner')).toBeInTheDocument();
        expect(getByText(/May 2, 2021 [0-9]+:45 PM/)).toBeInTheDocument();
    });

    it('should trigger delete', () => {
        const { getByLabelText } = render(<AdviceInfo key={advice.id} advice={advice} onDeleteAdvice={deleteAdvice}
        />);
        fireEvent.click(getByLabelText('hide advice'));
        expect(deleteAdvice).toHaveBeenCalled();
    });
});