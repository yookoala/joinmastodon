import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classNames from 'classnames';

import Home from './Home';
import Sponsorship from './Sponsorship';
import Imprint from './Imprint';
import BrowseApps from './BrowseApps';
import ScrollToTop from './ScrollToTop';
import Title from './Title';
import Covenant from './Covenant';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import pl from 'react-intl/locale-data/pl';
import cs from 'react-intl/locale-data/cs';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';
import ja from 'react-intl/locale-data/ja';
import ko from 'react-intl/locale-data/ko';
import pt from 'react-intl/locale-data/pt';
import zh from 'react-intl/locale-data/zh';
import ru from 'react-intl/locale-data/ru';
import it from 'react-intl/locale-data/it';
import ar from 'react-intl/locale-data/ar';
import tr from 'react-intl/locale-data/tr';
import nl from 'react-intl/locale-data/nl';
import cy from 'react-intl/locale-data/cy';
import sq from 'react-intl/locale-data/sq';

addLocaleData([
  ...en,
  ...pl,
  ...cs,
  ...fr,
  ...es,
  ...ja,
  ...ko,
  ...de,
  ...pt,
  ...zh,
  ...ru,
  ...it,
  ...ar,
  ...tr,
  ...nl,
  ...cy,
  ...sq,
]);

const messages = require.context('./locales/', false, /\.json$/);

const messagesForLocale = locale => messages(`./${locale}.json`);

const App = ({ usersLocale }) => (
  <IntlProvider locale={usersLocale} messages={messagesForLocale(usersLocale)}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)}>
          <Route exact path='/' component={Home} />
          <Route path='/category/:category/:language?' component={Home} />
          <Route path='/sponsors' component={Sponsorship} />
          <Route path='/imprint' component={Imprint} />
          <Route path='/apps' component={BrowseApps} />
          <Route path='/covenant' component={Covenant} />
          <Title />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

App.propTypes = {
  usersLocale: PropTypes.string.isRequired,
};

export default App;
