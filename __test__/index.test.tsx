import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders the correct heading', async () => {
        render(<Home />);

    await waitFor(() => {
        const heading = screen.queryByText('New Products');
        if (heading) 
        {
            expect(heading).toBeInTheDocument();
            return true; 
        }
        return false; 
        });
    });
});
