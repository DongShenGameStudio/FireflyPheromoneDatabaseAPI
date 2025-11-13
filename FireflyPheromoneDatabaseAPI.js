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
      level: 42,
      value: 475578005,
      pvpRate: 12.8,
      pveRate: 6.0,
      registeredSeason: "S6",
      isEsports: true
    },
    {
      id: 4805326463,
      name: "sx恋ll",
      tier: "铂金校官4",
      level: 41,
      value: 674776957,
      pvpRate: 5.0,
      pveRate: 2.1,
      registeredSeason: "S6",
      isEsports: false
    },
    {
      id: 2891430528,
      name: "权威•帝天战神",
      tier: "白银士官4",
      level: 14,
      value: 1177418983,
      pvpRate: 20.0,
      pveRate: 33.0,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 2822505106,
      name: "最亮的回归",
      tier: "黄金尉官1",
      level: 51,
      value: 1533587154,
      pvpRate: 16.7,
      pveRate: 19.5,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 2828373139,
      name: "暴躁小帅哥2",
      tier: "白银士官2",
      level: 55,
      value: 532683022,
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
    },
    {
      id: 2822129516,
      name: "东山QVQ-官号",
      tier: "青铜士兵5",
      level: 6,
      value: "144269543",
      pvpRate: 8.0,
      pveRate: 36.0,
      registeredSeason: "S1",
      isEsports: true
    },
    {
      id: 2822129516,
      name: "东山QVQ-G号",
      tier: "因开外挂已被永久封禁",
      level: "因开外挂已被永久封禁",
      value: "因开外挂已被永久封禁",
      pvpRate: "因开外挂已被永久封禁",
      pveRate: "因开外挂已被永久封禁",
      registeredSeason: "S0",
      isEsports: true
    },
    {
      id: 4860394684,
      name: "东神萤火电竞-1",
      tier: "青铜士兵5",
      level: 1,
      value: "7898443",
      pvpRate: 0.0,
      pveRate: 0.0,
      registeredSeason: "S6",
      isEsports: true
    },
    {
      id: 2856604003,
      name: "东山QVQ-支号",
      tier: "青铜士兵5",
      level: 4,
      value: "12942702",
      pvpRate: 0.0,
      pveRate: 0.0,
      registeredSeason: "S2",
      isEsports: true
    },
    {
      id: 2879944704,
      name: "东山QVQ-Z号",
      tier: "青铜士兵5",
      level: 4,
      value: "20600828",
      pvpRate: 0.0,
      pveRate: 0.0,
      registeredSeason: "S2",
      isEsports: true
    },
    {
      id: 2875301768,
      name: "东山QVQ-Z号2",
      tier: "青铜士兵5",
      level: 4,
      value: "20411159",
      pvpRate: 0.0,
      pveRate: 0.0,
      registeredSeason: "S2",
      isEsports: true
    },
    {
      id: 2808009915,
      name: "南疆劳模方源",
      tier: "黄金尉官3",
      level: 17,
      value: "7824833178",
      pvpRate: 1.9,
      pveRate: 11.0,
      registeredSeason: "S1",
      isEsports: false
    },
    {
      id: 2842562060,
      name: "永痕的铁矿儿",
      tier: "黄金尉官5",
      level: 43,
      value: "679592200",
      pvpRate: 2.7,
      pveRate: 8.5,
      registeredSeason: "S2",
      isEsports: false
    },
    {
      id: 2857200374,
      name: "五彩斑斓的黑",
      tier: "钻石少将1",
      level: 80,
      value: "9795653217",
      pvpRate: 3.9,
      pveRate: 11.3,
      registeredSeason: "S1",
      isEsports: false
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