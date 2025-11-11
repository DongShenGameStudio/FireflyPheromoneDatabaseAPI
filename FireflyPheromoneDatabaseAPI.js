/**
 * Firefly Pheromone Database API = 数据 + 搜索器
 * 数据格式：players 数组就地写死，含全部字段（已删除 power）
 */
(function (global) {
  /* ========== 1. 数据（就地写死，上传前改这里） ========== */
  const players = [
    {
      id: 2827589362,
      name: "东神-萤火电竞",
      tier: "黄金尉官5",
      level: 41,
      value: 494776363,
      pvpRate: 12.9,
      pveRate: 6.2,
      registeredSeason: "S6",
      isEsports: true
    },
    {
      id: 4805326463,
      name: "sx恋ll",
      tier: "黄金尉官1",
      level: 38,
      value: 674776957,
      pvpRate: 5.4,
      pveRate: 2.6,
      registeredSeason: "S6",
      isEsports: false
    },
    {
      id: 2891430528,
      name: "权威•帝天战神",
      tier: "白银士官5",
      level: 12,
      value: 1135112954,
      pvpRate: 14.0,
      pveRate: 59.0,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 2822505106,
      name: "最亮的回归",
      tier: "黄金尉官2",
      level: 50,
      value: 1527580304,
      pvpRate: 17.1,
      pveRate: 19.2,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 2828373139,
      name: "暴躁小帅哥2",
      tier: "白银士官2",
      level: 55,
      value: 532538620,
      pvpRate: 9.5,
      pveRate: 3.1,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 4825847565,
      name: "东神-萤火",
      tier: "青铜士兵1",
      level: 30,
      value: "********",
      pvpRate: 10.2,
      pveRate: 3.8,
      registeredSeason: "S6",
      isEsports: true
    }
    // ↑↑↑ 继续追加，每行一个对象
  ];

  /* ========== 2. 搜索 ========== */
  function searchPlayer(keyword) {
    if (!keyword) return players;
    const kw = keyword.toLowerCase();
    return players.filter(p =>
      p.name.toLowerCase().includes(kw) ||
      String(p.id).includes(kw)
    );
  }

  /* ========== 3. 表格渲染（已修复移动端显示问题） ========== */
  function renderTable(list) {
    if (!list.length) return '<p class="no-data">暂无数据</p>';
    let html = `<table class="fpdb-table"><thead>
      <tr><th>数字名称</th><th>玩家名称</th><th>段位</th><th>等级</th>
      <th>身价资产</th><th>萤火虫战斗率</th>
      <th>人机战斗率</th><th>注册赛季</th><th>电竞成员</th></tr></thead><tbody>`;
    list.forEach(p => {
      html += `<tr>
        <td data-label="数字名称">${p.id}</td>
        <td data-label="玩家名称">${p.name}</td>
        <td data-label="段位">${p.tier}</td>
        <td data-label="等级">${p.level}</td>
        <td data-label="身价资产">${p.value.toLocaleString()}</td>
        <td data-label="萤火虫战斗率">${p.pvpRate}%</td>
        <td data-label="人机战斗率">${p.pveRate}%</td>
        <td data-label="注册赛季">${p.registeredSeason}</td>
        <td data-label="电竞成员">${p.isEsports ? '是' : '否'}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    return html;
  }

  /* ========== 4. 暴露接口 ========== */
  global.FPDB = {
    searchPlayer,
    renderTable,
    getPlayers: () => players,
    loadData: () => Promise.resolve() // 模拟异步加载数据
  };
})(window);