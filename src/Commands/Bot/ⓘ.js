const a0_0x2eb921 = a0_0x1c84;
(function (_0x24dce9, _0x22bb3e) {
    const _0x4c5c68 = a0_0x1c84,
        _0x337fb4 = _0x24dce9();
    while (!![]) {
        try {
            const _0xae6ad5 = -parseInt(_0x4c5c68(0xc6)) / 0x1 * (parseInt(_0x4c5c68(0xc1)) / 0x2) + parseInt(_0x4c5c68(0xe3)) / 0x3 + parseInt(_0x4c5c68(0xea)) / 0x4 + -parseInt(_0x4c5c68(0xed)) / 0x5 * (parseInt(_0x4c5c68(0xe2)) / 0x6) + -parseInt(_0x4c5c68(0xf1)) / 0x7 * (parseInt(_0x4c5c68(0xd8)) / 0x8) + parseInt(_0x4c5c68(0xdf)) / 0x9 + parseInt(_0x4c5c68(0xca)) / 0xa;
            if (_0xae6ad5 === _0x22bb3e) break;
            else _0x337fb4['push'](_0x337fb4['shift']());
        } catch (_0xb4a00e) {
            _0x337fb4['push'](_0x337fb4['shift']());
        }
    }
}(a0_0x4162, 0xace82));

const IMAGES = [
    a0_0x2eb921(0xe1),
    a0_0x2eb921(0xee),
    'https://media.crysnovax.workers.dev/910f4a83-b44d-4527-a9f5-e20467f36478.jpg',
    a0_0x2eb921(0xd1),
    a0_0x2eb921(0xe8),
    a0_0x2eb921(0xc4),
    a0_0x2eb921(0xc3)
];

const DIVIDER = '⿻ ⿻ ⿻ ⿻ ⿻ ⿻ ⿻ ⿻ ⿻ ⿻';
const READMORE = '\u200E'.repeat(100);

const CATEGORY_ICONS = {
    'ai': 'ಠ_ಠ',
    'search': '❔',
    'admin': '🜲',
    'anime': '㋛',
    'audio': '𝄞',
    'bot': '⚉',
    'converter': '℘',
    'core': '𓀀',
    'documents': '𓂃✍︎',
    'downloader': '⎙',
    'economy': '𓃼',
    'fun': 'ಥ⁠‿⁠ಥ',
    'games': '◈',
    'group': '⃝⃘̉̉̉━⋆',
    'media': '( ͡❛ ₃ ͡❛)',
    'media-editor': '✐',
    'overlays': '彡',
    'owner': '𓋎⚇',
    'quiz': '◈',
    'reaction': '◈',
    'system': '◈',
    'tools': '⎔',
    'utils': '❂'
};

function getIcon(_0x1fdfa7) {
    const _0x44bace = a0_0x2eb921;
    return CATEGORY_ICONS[_0x1fdfa7[_0x44bace(0xdd)]()] || '◈';
}

function a0_0x1c84(_0x470845, _0x2a3b97) {
    _0x470845 = _0x470845 - 0xc1;
    const _0x41622f = a0_0x4162();
    let _0x1c84d2 = _0x41622f[_0x470845];
    return _0x1c84d2;
}

function buildText(_0x476ecf, _0x3dc0b9, _0x188ee7, _0x18dc5e, _0x1f355b, _0x594694, _0x4fe096, _0x5f43ff, _0xb2dc3b) {
    const _0x5800d2 = a0_0x2eb921;
    let _0x5357ef = '';
    
    // Header
    _0x5357ef += '⌘ ══〔 *' + _0x18dc5e[_0x5800d2(0xdb)]() + '* 〕══ ⌘\n';
    _0x5357ef += DIVIDER + '\n\n';
    
    // Bot Info
    _0x5357ef += '𒆜 ✦ *Hello, ' + _0x476ecf + '*\n';
    _0x5357ef += '❏◦ Number  · ⇆ ' + _0x3dc0b9 + '\n';
    _0x5357ef += '❏◦ Prefix  ·  ⇆ [ ' + _0x188ee7 + ' ]\n';
    _0x5357ef += '❏◦ Cmds    · ⇆ ' + _0x594694 + ' commands\n';
    _0x5357ef += '❏◦ Uptime  · ⇆ ' + _0x1f355b + 'm\n';
    _0x5357ef += '❏◦ Time    · ⇆ ' + _0x5f43ff + '\n';
    _0x5357ef += '❏◦ RAM     · ⇆ ' + _0x4fe096 + '\n';
    _0x5357ef += DIVIDER + '\n';
    _0x5357ef += READMORE;
    
    // Categories and Commands
    for (const [_0x4d9953, _0x288981] of Object['entries'](_0xb2dc3b)) {
        const _0x3cbd83 = getIcon(_0x4d9953);
        _0x5357ef += '\n𒆜 ◈ *' + _0x4d9953[_0x5800d2(0xdb)]() + '* ' + _0x3cbd83 + '\n';
        const _0x530ce1 = new Set();
        for (const _0x477557 of _0x288981) {
            if (!_0x477557?.[_0x5800d2(0xc8)]) continue;
            const _0x14f78a = _0x477557[_0x5800d2(0xc8)][_0x5800d2(0xdd)]();
            if (_0x530ce1[_0x5800d2(0xd5)](_0x14f78a)) continue;
            _0x530ce1[_0x5800d2(0xe6)](_0x14f78a);
            _0x5357ef += '❏◦ ➫ ' + _0x188ee7 + _0x477557[_0x5800d2(0xc8)] + '\n';
        }
    }
    
    // Footer
    _0x5357ef += '\n⌘ ══〔 ☠︎︎ ⋆⁩⁩CODY AI 〕══ ⌘';
    return _0x5357ef;
}

function a0_0x4162() {
    const _0x16ea4c = [
        '*\x20гҖ•в•җв•җ\x20вҢҳ\x0a', 'add', 'вқҸв—Ұ\x20вһ«\x20',
        'https://media.crysnovax.workers.dev/3db1709e-78fb-411f-bcdc-4fdf29c0c9e4.jpg',
        'аІ _аІ ', '4731040MgrzHC', '0@s.whatsapp.net', 'вқҸв—Ұ\x20RAM\x20\x20\x20\x20\x20В·\x20вҮҶ\x20',
        '725MAnUuW', 'https://media.crysnovax.workers.dev/cce21768-00c5-4a46-97e0-1998d50b16fe.jpg',
        'fromCharCode', 'вҢҳ\x20в•җв•җгҖ”\x20*', '847497XFlkoB', '209454ZtjMxk', 'random',
        'https://cdn.crysnovax.link/files/1777159119512-f9cf068a-f3be-4027-a644-a43a7849f850.png',
        'https://media.crysnovax.workers.dev/4b318efb-0ae1-4715-b2d6-11d3de2fb25c.png',
        '```а®ғр– ғ\x20CRYSNвҡүVA\x20AIрҹңІ```\x20', '8QsIzFX', '\x20]\x0a', 'name',
        'вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»\x20вҝ»',
        '447440JkwaBP', 'вқҸв—Ұ\x20Cmds\x20\x20\x20\x20В·\x20вҮҶ\x20', 'chat',
        'р’Ҷң\x20вңҰ\x20*Hello,\x20', '3EB0', 'substring', 'sendMessage',
        'https://media.crysnovax.workers.dev/712b32e8-7dc5-41a0-b306-9b7d11c1af62.jpg',
        'length', 'вқҸв—Ұ\x20Uptime\x20\x20В·\x20вҮҶ\x20', 'exports', 'has',
        'status@broadcast', '```вҢҳ\x20CRYSNвҳүVA\x20AI\x20р“ҖҖ```', '64rUwOgE',
        'р“ӢҺвҡҮ', 'вғқвғҳМүМүМүв”ҒвӢҶ', 'toUpperCase', 'аІҘвҒ вҖҝвҒ аІҘ',
        'toLowerCase', '\x20рқ“¬рқ“»рқ”Ӯрқ“јрқ“·рқ“ёрқ“ҝрқ“Ә\x20рқ“ҝрқ“®рқ“»рқ“Ірқ“Ҝрқ“Ірқ“®рқ“ӯ\x20вң“',
        '8369739kTgOUK', '\x0aвҢҳ\x20в•җв•җгҖ”\x20вҳ пёҺпёҺ\x20вӢҶвҒ©вҒ©ZEE\x20BвқӮT\x20гҖ•в•җв•җ\x20вҢҳ',
        'https://media.crysnovax.workers.dev/12b6f72b-ee4c-4bd9-a3b4-4fe68e443eea.jpg',
        '13140AqEPaY', '2024055POJyiW', '120363402922206865@newsletter'
    ];
    a0_0x4162 = function () {
        return _0x16ea4c;
    };
    return a0_0x4162();
}

module[a0_0x2eb921(0xd4)] = async function sendStyle6(_0x2067e0, _0x2caec8, {
    userName: _0x2058eb,
    userNum: _0x13ae95,
    prefix: _0x44a010,
    botName: _0x13826e,
    uptimeMin: _0x6f8007,
    totalCmds: _0x3f8024,
    storage: _0x10adfe,
    time: _0x5c4859,
    categories: _0x131bf7
}) {
    const config = require('../../../settings/config');
    const _0x8beea9 = a0_0x2eb921;
    const _0x1c34e4 = config.thumbUrl || IMAGES[Math['floor'](Math['random']() * IMAGES[_0x8beea9(0xd2)])];
    const _0xafa6cd = buildText(_0x2058eb, _0x13ae95, _0x44a010, _0x13826e, _0x6f8007, _0x3f8024, _0x10adfe, _0x5c4859, _0x131bf7);
    
    // NO newsletter/channel crap - clean contextInfo
    const _0x19f048 = {
        'forwardingScore': 0x3e7,
        'isForwarded': !![],
        'participant': '0@s.whatsapp.net',
        'remoteJid': '0@s.whatsapp.net'
    };
    
    const _0x7247f4 = {
        'key': {
            'remoteJid': 'status@broadcast',
            'fromMe': ![],
            'participant': '0@s.whatsapp.net',
            'id': '3EB0' + Math['random']()['toString'](0x10)['substring'](0x2, 0xa)['toUpperCase']()
        },
        'message': {
            'conversation': '```⌘ CODY AI ✓```'
        }
    };
    
    await _0x2067e0[_0x8beea9(0xd0)](_0x2caec8[_0x8beea9(0xcc)], {
        'image': {
            'url': _0x1c34e4
        },
        'caption': _0xafa6cd,
        'contextInfo': _0x19f048
    }, {
        'quoted': _0x7247f4
    });
};
