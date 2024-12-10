const React = require('react');

module.exports = {
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({ children }) => <div>{children}</div>,
    MemoryRouter: ({ children }) => <div>{children}</div>,
    useNavigate: jest.fn(),
    useLocation: jest.fn(() => ({
        state: { score: 2, count: 3 },
    })),
};
