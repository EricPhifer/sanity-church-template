// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Layout
import footer from './footer';
import navigation from './navigation';
// Homepage
import home from './home';
import sidebar from './sidebar';
// About
import calendar from './calendar';
import about from './about';
// Contact
import contact from './contact';
import sermons from './sermons';
import guestSermons from './guestSermons';
// Privacy Policy & Terms
import privacyPolicy from './privacyPolicy';
import termsConditions from './termsConditions';
// Components
import PlanContent from '../components/PlanContent';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Layout Content
    navigation,
    footer,
    // Homepage Content
    home,
    sidebar,
    // About Page Content
    about,
    calendar,
    // Contact Page Content
    contact,
    // Sermon Page Content
    sermons,
    guestSermons,
    // Privacy Policy & Terms
    privacyPolicy,
    termsConditions,
    // Components
    PlanContent,
  ]),
})
