/**
 * Firefly Pheromone Database API = 数据 + 搜索器
 * 数据格式：players 数组就地写死，含全部字段
 */
(function (global) {
  /* ========== 1. 数据（就地写死，上传前改这里） ========== */
  const players = [
    {
      id: 2827589362,
      name: "东神-萤火电竞",
      tier: "黄金尉官5",
      level: 41,
      value: 499709552,
      pvpRate: 13.1,
      pveRate: 6.5,
      registeredSeason: "S6",
      isEsports: true
    },
    {
      id: 10000000,
      name: "未编号",
      tier: "ERROR",
      level: 0,
      value: 0,
      pvpRate: 0,
      pveRate: 0,
      registeredSeason: "S0",
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

  /* ========== 3. 表格渲染（战斗率原样输出，不加 %） ========== */
  function renderTable(list) {
    if (!list.length) return '<p class="no-data">暂无数据</p>';
    let html = `<table class="fpdb-table"><thead>
      <tr><th>数字名称</th><th>玩家名称</th><th>段位</th><th>等级</th>
      <th>身价资产</th><th>萤火虫战斗率</th>
      <th>人机战斗率</th><th>注册赛季</th><th>电竞成员</th></tr></thead><tbody>`;
    list.forEach(p => {
      html += `<tr>
        <td>${p.id}</td><td>${p.name}</td><td>${p.tier}</td>
        <td>${p.level}</td><td>${p.value.toLocaleString()}</td>
        <td>${p.pvpRate}</td>
        <td>${p.pveRate}</td>
        <td>${p.registeredSeason}</td><td>${p.isEsports ? '是（电竞成员）' : '否（非电竞）'}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    return html;
  }

  /* ========== 4. 暴露接口 ========== */
  global.FPDB = {
    searchPlayer,
    renderTable,
    getPlayers: () => players
  };
})(window);