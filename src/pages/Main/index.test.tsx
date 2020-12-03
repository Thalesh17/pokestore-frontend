import React from 'react';
import {act, render, screen, waitFor } from '@testing-library/react';
import Main from '.';
import Routes from '../../components/Routes';

describe('Main', () => {
it('open App Main', () => {
        render(
            <Routes>
                <Main />
            </Routes>
        )

            expect(screen.getByText('ÁGUA')).toBeInTheDocument();
    });
})