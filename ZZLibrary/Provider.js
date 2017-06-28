
// Nothing, just some Provider abstract
// 所有的小说供应商类都需要实现

/** 
 * 首页推荐
 * @param {function} cb: (data, error) => Void 完成回调
 * - name: string.isRequired        小说名字
 * - id: string.isRequired          小说ID
 * - author: string                 小说作者
 */
function recommand(cb);

/**
 * 搜索小说
 * @param {string} key 搜索关键字
 * @param {function} cb: (data, error) => Void 完成回调
 * @param {object} data 成功返回数据(Optional):
 * - name: string.isRequired        小说名字
 * - author: string                 作者
 * - catalog: Array<{               目录
 *       id: string.isRequired      章节ID
 *       title: string.isRequired   章节标题
 *   }>.isRequired
 * - newest: {                      最新章节
 *       title: string.isRequired   最新章节标题
 *       time: string.isRequired    更新时间
 *   }
 * @param {object} error 错误信息(Optional): 
 * - code: number.isRequired        1->成功, otherwise
 * - msg: string.isRequired 
 */
function search(key, cb);

/** 
 * 获取章节详情
 * @param {string} id 章节ID
 * @param {function} cb: (data, error) => Void 完成回调
 * @param {object} data 成功返回数据(Optional):
 * - title: string.isRequired       标题
 * - content: string.isRequired     章节内容  
 * @param {object} error 错误信息(Optional): 
 * - code: number.isRequired        1->成功, otherwise
 * - msg: string.isRequired   
*/
function getChapter(id, cb);
