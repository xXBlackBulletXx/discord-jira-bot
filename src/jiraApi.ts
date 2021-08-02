import * as JiraAPI from 'jira-client'
import * as config from '../jira-config.json'

const jira = new JiraAPI(config)

export default jira
