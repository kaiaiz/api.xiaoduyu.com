
import posts from './posts'
import user from './user'
import comment from './comment'
import userNotification from './user-notification'
import notification from './notification'
import topic from './topic'

let list = {
  posts, user, comment,
  'user-notification': userNotification,
  notification, topic
}

export default ({ args = {}, model, role = '' }) => {

  let { queryList, updateList } = list[model]

  let query = {}, update = {}, schema = ``, error;

  for (let i in args) {
    if (!queryList[i]) continue
    let result = queryList[i](args[i])
    if (result.role && role != result.role) {
      error = '无权限修改'
      continue
    }
    if (result.name) query[result.name] = result.value
  }

  // 更新字段查询
  for (let i in args) {
    if (!updateList[i]) continue
    let result = updateList[i](args[i])
    if (result.role && role != result.role) {
      error = '无权限修改'
      continue
    }
    if (result.name) update[result.name] = result.value
  }

  // 生成 schema

  for (let i in queryList) {
    schema += `
      #${queryList[i]().desc}${queryList[i]().role == 'admin' ? ' (管理员)' : ''}
      ${i}:${queryList[i]().type}
    `
  }

  for (let i in updateList) {
    schema += `
      #${updateList[i]().desc}${updateList[i]().role == 'admin' ? ' (管理员)' : ''}
      ${i}:${updateList[i]().type}
    `
  }

  return { error, query, update, updateSchema: schema }

}
