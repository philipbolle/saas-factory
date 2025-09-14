import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/Header';
import '@testing-library/jest-dom';

// Mock the useAuth hook
jest.mock('../../hooks/useAuth');

// Mock the config module
jest.mock('../../config');

const mockUseAuth = useAuth as jest.Mock;

describe('Header Component', () => {
  test('renders login button when user is not authenticated', () => {
    mockUseAuth.mockReturnValue({ user: null });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('SaaS Factory')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Sign Out')).not.toBeInTheDocument();
  });

  test('renders user information and logout button when user is authenticated', () => {
    const mockUser = { email: 'test@example.com' };
    mockUseAuth.mockReturnValue({ user: mockUser, signOut: jest.fn() });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(`Welcome, ${mockUser.email}`)).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  test('calls signOut on sign out button click', async () => {
    const mockSignOut = jest.fn().mockResolvedValue(undefined);
    const mockUser = { email: 'test@example.com' };
    mockUseAuth.mockReturnValue({ user: mockUser, signOut: mockSignOut });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Wrap the user event in act for async state updates
    await act(async () => {
      fireEvent.click(screen.getByText('Sign Out'));
    });

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});