import '@testing-library/jest-dom';
import Home from '@/app/[locale]/(authenticated)/home/page';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals'; // Importa 'expect' explícitamente

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.findAllByTestId('primary');

    expect(heading).toBeDefined();
  });
});
