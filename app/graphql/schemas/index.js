import Posts from './posts'
import Topic from './topic'
import User from './user'
import Comment from './comment'
import UserNotification from './user-notification'
import Notification from './notification'
import Captcha from './captcha'
import Account from './account'
import Analysis from './analysis'
import Qiniu from './qiniu'

var typeDefs = [ `

${Posts.Schema}
${Topic.Schema}
${User.Schema}
${Comment.Schema}
${UserNotification.Schema}
${Notification.Schema}
${Captcha.Schema}
${Account.Schema}
${Analysis.Schema}
${Qiniu.Schema}

# 查询API
type Query {
  ${Posts.Query}
  ${Topic.Query}
  ${User.Query}
  ${Comment.Query}
  ${UserNotification.Query}
  ${Notification.Query}
  ${Captcha.Query}
  ${Account.Query}
  ${Analysis.Query}
  ${Qiniu.Query}
}

# 增、删、改API
type Mutation {
  ${Posts.Mutation}
  ${Topic.Mutation}
  ${User.Mutation}
  ${Comment.Mutation}
  ${UserNotification.Mutation}
  ${Notification.Mutation}
  ${Captcha.Mutation}
  ${Account.Mutation}
  ${Analysis.Mutation}
  ${Qiniu.Mutation}
}

schema {
  mutation: Mutation
  query: Query
}

`];

export default typeDefs;
