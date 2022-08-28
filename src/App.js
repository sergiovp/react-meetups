import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

function App() {
    return (
        <Router>
            <div data-test="app">
                <Layout>
                    <Routes>
                        <Route exact path={'/'} element={<AllMeetupsPage />} />
                        <Route
                            exact
                            path={'/favorites'}
                            element={<FavoritesPage />}
                        />
                        <Route
                            exact
                            path={'/favorites'}
                            element={<FavoritesPage />}
                        />
                        <Route
                            exact
                            path={'/new'}
                            element={<NewMeetupsPage />}
                        />
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
