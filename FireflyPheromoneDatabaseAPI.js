/**
 * Firefly Pheromone Database API = 数据 + 搜索器
 * 数据格式：players 数组就地写死，含全部字段（已删除 power）
 */
(function (global) {
  /* ========== 1. 数据（就地写死，上传前改这里） ========== */
  let players = [
    {
      id: 2827589362,
      name: "东神-萤火电竞",
      tier: "黄金尉官5",
      level: 42,
      value: 475578005,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S6",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 46,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*"
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
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
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
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
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
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
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
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
    },
    {
      id: 4825847565,
      name: "东神萤火电竞-2",
      tier: "白银士官5",
      level: 34,
      value: 87209235,
      pvpRate: "10.4",
      pveRate: "4.0",
      registeredSeason: "S6",
      isEsports: true,
      title: "电竞新星",
      nuclearStrikeCount: 6,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*"
    },
    {
      id: 2822129516,
      name: "东山QVQ-官号",
      tier: "青铜士兵5",
      level: 6,
      value: 144269543,
      pvpRate: "此号已被网易封控_8.0",
      pveRate: "此号已被网易封控_36.0",
      registeredSeason: "S1",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    },
    {
      id: 2822129516,
      name: "东山QVQ-G号",
      tier: "因开外挂已被永久封禁",
      level: "因开外挂已被永久封禁",
      value: "因开外挂已被永久封禁",
      pvpRate: "因开外挂已被永久封禁并被网易封控",
      pveRate: "因开外挂已被永久封禁并被网易封控",
      registeredSeason: "S0",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    },
    {
      id: 4860394684,
      name: "东神萤火电竞-1",
      tier: "青铜士兵5",
      level: 1,
      value: 7898443,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S6",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*"
    },
    {
      id: 2856604003,
      name: "东山QVQ-支号",
      tier: "青铜士兵5",
      level: 4,
      value: 12942702,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S2",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    },
    {
      id: 2879944704,
      name: "东山QVQ-Z号",
      tier: "青铜士兵5",
      level: 4,
      value: 20600828,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S2",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    },
    {
      id: 2875301768,
      name: "东山QVQ-Z号2",
      tier: "青铜士兵5",
      level: 4,
      value: 20411159,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S2",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 0,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    },
    {
      id: 2808009915,
      name: "南疆劳模方源",
      tier: "黄金尉官3",
      level: 17,
      value: 7824833178,
      pvpRate: 1.9,
      pveRate: 11.0,
      registeredSeason: "S1",
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
    },
    {
      id: 2842562060,
      name: "永痕的铁矿儿",
      tier: "黄金尉官5",
      level: 43,
      value: 679592200,
      pvpRate: 2.7,
      pveRate: 8.5,
      registeredSeason: "S2",
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
    },
    {
      id: 2857200374,
      name: "五彩斑斓的黑",
      tier: "钻石少将1",
      level: 80,
      value: 9795653217,
      pvpRate: 3.9,
      pveRate: 11.3,
      registeredSeason: "S1",
      isEsports: false,
      title: " ",
      nuclearStrikeCount: 00,
      realNameStatus: "否",
      sameRealName: " ",
      realNameDesensitized: " "
    },
    {
      id: 2885471772,
      name: "东山QVQ-非渠道",
      tier: "青铜士兵5",
      level: 5,
      value: 377823548,
      pvpRate: "此号已被网易封控",
      pveRate: "此号已被网易封控",
      registeredSeason: "S1",
      isEsports: true,
      title: " ",
      nuclearStrikeCount: 8,
      realNameStatus: "是",
      sameRealName: "是",
      realNameDesensitized: "陈*发"
    }
    // ↑↑↑ 继续追加，每行一个对象
  ];

  /* ========== 随机排序功能 ========== */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 每次加载时随机排序
  players = shuffleArray(players);

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
    
    // 获取身价资产颜色类
    function getValueColorClass(value) {
      if (typeof value !== 'number') return 'value-below-1k';
      
      if (value > 100000000000) return 'value-over-100b'; // 超过千亿
      if (value > 100000000) return 'value-over-100m'; // 超过1亿
      if (value > 10000000) return 'value-over-10m'; // 超过千万
      if (value > 1000000) return 'value-over-1m'; // 超过百万
      if (value > 10000) return 'value-over-10k'; // 超过1万
      if (value > 1000) return 'value-over-1k'; // 超过千
      return 'value-below-1k'; // 千以下
    }
    
    // 获取核聚变打击次数颜色类
    function getNuclearColorClass(count) {
      if (count <= 10) return 'nuclear-0-10';
      if (count <= 20) return 'nuclear-11-20';
      if (count <= 30) return 'nuclear-21-30';
      return 'nuclear-31-plus';
    }
    
    let html = `<table class="fpdb-table"><thead>
      <tr>
        <th>数字名称</th>
        <th>玩家名称</th>
        <th>称号</th>
        <th>段位</th>
        <th>等级</th>
        <th>身价资产</th>
        <th>与萤火虫战斗率</th>
        <th>与人机战斗率</th>
        <th>核聚变打击次数</th>
        <th>注册赛季</th>
        <th>电竞成员</th>
        <th>是否被系统检测到实名状态</th>
        <th>是否被系统检测到同一个实名人</th>
        <th>实名人姓名</th>
      </tr>
    </thead><tbody>`;
    
    list.forEach(p => {
      const valueClass = getValueColorClass(p.value);
      const nuclearClass = getNuclearColorClass(p.nuclearStrikeCount);
      
      html += `<tr>
        <td data-label="数字名称">${p.id}</td>
        <td data-label="玩家名称">${p.name}</td>
        <td data-label="称号">${p.title}</td>
        <td data-label="段位">${p.tier}</td>
        <td data-label="等级">${p.level}</td>
        <td data-label="身价资产" class="${valueClass}">${typeof p.value === 'number' ? p.value.toLocaleString() : p.value}</td>
        <td data-label="与萤火虫战斗率">${p.pvpRate}%</td>
        <td data-label="与人机战斗率">${p.pveRate}%</td>
        <td data-label="核聚变打击次数" class="${nuclearClass}">${p.nuclearStrikeCount}</td>
        <td data-label="注册赛季">${p.registeredSeason}</td>
        <td data-label="电竞成员">${p.isEsports ? '是' : '否'}</td>
        <td data-label="是否被系统检测到实名状态">${p.realNameStatus}</td>
        <td data-label="是否被系统检测到同一个实名人">${p.sameRealName}</td>
        <td data-label="实名人姓名">${p.realNameDesensitized}</td>
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