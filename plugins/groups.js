const _0x396d40=_0x2313;(function(_0x109b6c,_0x589282){const _0x410f93=_0x2313,_0x28ce31=_0x109b6c();while(!![]){try{const _0x2c4310=parseInt(_0x410f93(0x1cc))/0x1+-parseInt(_0x410f93(0x1d9))/0x2*(-parseInt(_0x410f93(0x1cb))/0x3)+-parseInt(_0x410f93(0x1ce))/0x4*(parseInt(_0x410f93(0x1d8))/0x5)+parseInt(_0x410f93(0x1af))/0x6*(-parseInt(_0x410f93(0x1bd))/0x7)+parseInt(_0x410f93(0x1ba))/0x8+-parseInt(_0x410f93(0x1d4))/0x9*(parseInt(_0x410f93(0x1c9))/0xa)+-parseInt(_0x410f93(0x1e6))/0xb*(-parseInt(_0x410f93(0x1e4))/0xc);if(_0x2c4310===_0x589282)break;else _0x28ce31['push'](_0x28ce31['shift']());}catch(_0x434284){_0x28ce31['push'](_0x28ce31['shift']());}}}(_0x2317,0x7a32d));function _0x2317(){const _0x42f281=['660412sZGZsZ','../config','.promote','Welcome\x20message\x20has\x20been\x20set.','not_announcement','groupParticipantsUpdate','772677fBtKMr','catch','sendMessage','\x20has\x20been\x20added\x20to\x20the\x20group.','20ggOLTj','4VZfXhc','unmute','You\x20must\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.','Please\x20provide\x20a\x20goodbye\x20message.','*Done\x20✓✓*','Bot\x20must\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.','open\x20a\x20group','Goodbye\x20message\x20has\x20been\x20set.','🛑\x20GROUP\x20IS\x20OPEN\x20MY\x20BOT\x20OWNER','groupSettingUpdate','quoted','1104924YYNmvF','.demote','33SYDlID','delete\x20message','22914VVWSrl','promote\x20admin\x20to\x20a\x20member','demote','demote\x20admin\x20to\x20a\x20member','key','sender','then','mentionedJid','ALIVE_IMG','🛑\x20GROUP\x20ADMIN\x20DEMOTE\x20BY\x20MY\x20BOT\x20OWNER','notextfordel','1850672ngKLJs','🛑\x20GROUP\x20ADMIN\x20PROMOTE\x20BY\x20MY\x20BOT\x20OWNER','add','483dBNWQb','group','This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group.','del','.unmute','Set\x20the\x20welcome\x20message\x20for\x20the\x20group.','chat','replace','log','split','@s.whatsapp.net','@whiskeysockets/baileys','20CWmoRS','🛑\x20GROUP\x20IS\x20CLOSED\x20MY\x20BOT\x20OWNER','492213xcYUaZ','760447MnFGkG','announcement'];_0x2317=function(){return _0x42f281;};return _0x2317();}const config=require(_0x396d40(0x1cf)),os=require('os'),fs=require('fs'),{cmd,commands}=require('../command'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,jsonformat}=require('../lib/functions'),{default:makeWASocket,useMultiFileAuthState,WA_DEFAULT_EPHEMERAL,jidNormalizedUser,proto,getDevice,generateWAMessageFromContent,fetchLatestBaileysVersion,makeInMemoryStore,getContentType,generateForwardMessageContent,downloadContentFromMessage,jidDecode}=require(_0x396d40(0x1c8));function _0x2313(_0x348f05,_0xc8ebbd){const _0x23177d=_0x2317();return _0x2313=function(_0x23138b,_0x20d9a4){_0x23138b=_0x23138b-0x1ae;let _0x522ee4=_0x23177d[_0x23138b];return _0x522ee4;},_0x2313(_0x348f05,_0xc8ebbd);}cmd({'pattern':'mute','react':'🔖','desc':'close\x20a\x20group','category':_0x396d40(0x1be),'use':'.mute','filename':__filename},async(_0x5708c4,_0x26c5ea,_0x2906ad,{from:_0x5d0e67,prefix:_0x1fa3c5,l:_0xc2c179,quoted:_0x147526,body:_0x2276a4,isCmd:_0x500411,command:_0x4799f6,args:_0x1eb0c2,q:_0x398d72,isGroup:_0x13225f,sender:_0x5a1266,senderNumber:_0xb489ba,botNumber2:_0x1f41de,botNumber:_0x57c22e,pushname:_0x4f7b37,isMe:_0x4d4fe8,isOwner:_0xbe337c,groupMetadata:_0x4d77f7,groupName:_0x18acbd,participants:_0x367d73,groupAdmins:_0x1b3654,isBotAdmins:_0x1b0243,isAdmins:_0x3cb7be,reply:_0x35e459})=>{const _0x57c39e=_0x396d40;try{if(!_0x13225f)return _0x35e459(ONLGROUP);if(!_0x1b0243)return _0x35e459(botAdmin);if(!_0x3cb7be)return _0x35e459(ADMIN);await _0x5708c4['groupSettingUpdate'](_0x26c5ea[_0x57c39e(0x1c3)],_0x57c39e(0x1cd));const _0x1a434c=await _0x5708c4[_0x57c39e(0x1d6)](_0x26c5ea['chat']['G_MUTE']);await _0x5708c4[_0x57c39e(0x1d6)](_0x5d0e67,{'react':{'text':'✅','key':_0x26c5ea[_0x57c39e(0x1b3)]}});}catch(_0x378413){_0x35e459(_0x57c39e(0x1ca)),_0xc2c179(_0x378413);}}),cmd({'pattern':_0x396d40(0x1da),'react':'🔖','desc':_0x396d40(0x1df),'category':_0x396d40(0x1be),'use':_0x396d40(0x1c1),'filename':__filename},async(_0x3cd963,_0x56e3c4,_0x9bb96,{from:_0x1a2bbd,prefix:_0x385e1f,l:_0x53d37a,quoted:_0x3ae828,body:_0x1f5757,isCmd:_0x1e7731,command:_0x544aff,args:_0x2c0fdf,q:_0x1d8733,isGroup:_0x2b34b8,sender:_0x52cb8d,senderNumber:_0x34a3b0,botNumber2:_0x5f1d1e,botNumber:_0x57dd9b,pushname:_0x247ba7,isMe:_0x57b543,isOwner:_0x156817,groupMetadata:_0x446abf,groupName:_0x29a2e2,participants:_0x35a971,groupAdmins:_0x54cc4e,isBotAdmins:_0x2996a9,isAdmins:_0x1998a1,reply:_0x49834f})=>{const _0x47afbc=_0x396d40;try{if(!_0x2b34b8)return _0x49834f(ONLGROUP);if(!_0x2996a9)return _0x49834f(botAdmin);if(!_0x1998a1)return _0x49834f(ADMIN);await _0x3cd963[_0x47afbc(0x1e2)](_0x56e3c4[_0x47afbc(0x1c3)],_0x47afbc(0x1d2));const _0x435c03=await _0x3cd963[_0x47afbc(0x1d6)](_0x56e3c4[_0x47afbc(0x1c3)]['G_UNMUTE']);await _0x3cd963[_0x47afbc(0x1d6)](_0x1a2bbd,{'react':{'text':'✅','key':_0x56e3c4['key']}});}catch(_0x4a166d){_0x49834f(_0x47afbc(0x1e1)),_0x53d37a(_0x4a166d);}}),cmd({'pattern':'promote','react':'🔖','desc':_0x396d40(0x1b0),'category':_0x396d40(0x1be),'use':_0x396d40(0x1d0),'filename':__filename},async(_0x318f1b,_0x48c146,_0x347c6b,{from:_0x4303ee,prefix:_0x22ec1a,l:_0x40982c,quoted:_0x110bc1,body:_0x7c55b3,isCmd:_0x3ed86c,command:_0x52a130,args:_0x5af496,q:_0x366ee4,isGroup:_0x4f0610,sender:_0x69f274,senderNumber:_0x593d8f,botNumber2:_0x5b766a,botNumber:_0x49a848,pushname:_0x5b7afe,isMe:_0x23d62b,isOwner:_0x4a78d9,groupMetadata:_0x477b43,groupName:_0x238a9d,participants:_0x323964,groupAdmins:_0xe310b4,isBotAdmins:_0x51d888,isAdmins:_0x5f4032,reply:_0x17abba})=>{const _0x3eaca3=_0x396d40;try{if(!_0x4f0610)return _0x17abba(ONLGROUP);if(!_0x51d888)return _0x17abba(botAdmin);if(!_0x5f4032)return _0x17abba(ADMIN);let _0x1347c7=_0x48c146[_0x3eaca3(0x1b6)]?_0x48c146['mentionedJid']:_0x48c146[_0x3eaca3(0x1e3)]?_0x48c146[_0x3eaca3(0x1e3)][_0x3eaca3(0x1b4)]:_0x366ee4[_0x3eaca3(0x1c4)](/[^0-9]/g,'')+_0x3eaca3(0x1c7);await _0x318f1b[_0x3eaca3(0x1d3)](_0x48c146['chat'],[_0x1347c7],'promote')[_0x3eaca3(0x1b5)](_0x1740fe=>_0x17abba(jsonformat(_0x1740fe)))[_0x3eaca3(0x1d5)](_0x527a0b=>_0x17abba(jsonformat(_0x527a0b))),_0x17abba(_0x3eaca3(0x1bb)),await _0x318f1b[_0x3eaca3(0x1d6)](_0x4303ee,{'react':{'text':'✅','key':_0x48c146[_0x3eaca3(0x1b3)]}});}catch(_0x188562){_0x17abba(_0x3eaca3(0x1dd)),_0x40982c(_0x188562);}}),cmd({'pattern':_0x396d40(0x1b1),'react':'🔖','desc':_0x396d40(0x1b2),'category':'group','use':_0x396d40(0x1e5),'filename':__filename},async(_0x2e386d,_0x313438,_0x489a3f,{from:_0x2eb73d,prefix:_0xf942e2,l:_0x46315a,quoted:_0x4386f5,body:_0x193e92,isCmd:_0x34a021,command:_0x28aa9f,args:_0x4d122b,q:_0x3ec2b0,isGroup:_0x2b2cd9,sender:_0xb7165b,senderNumber:_0x538b9c,botNumber2:_0x46c637,botNumber:_0xdb1368,pushname:_0x3a3ef7,isMe:_0x4e9a73,isOwner:_0x5d53d2,groupMetadata:_0x2c4224,groupName:_0x106413,participants:_0x1e78ab,groupAdmins:_0x42bb0c,isBotAdmins:_0x48df4e,isAdmins:_0x2f68fd,reply:_0x5468c2})=>{const _0x3f8fa1=_0x396d40;try{if(!_0x2b2cd9)return _0x5468c2(ONLGROUP);if(!_0x48df4e)return _0x5468c2(botAdmin);if(!_0x2f68fd)return _0x5468c2(ADMIN);let _0xa67a3c=_0x313438[_0x3f8fa1(0x1b6)]?_0x313438[_0x3f8fa1(0x1b6)]:_0x313438[_0x3f8fa1(0x1e3)]?_0x313438[_0x3f8fa1(0x1e3)]['sender']:_0x3ec2b0[_0x3f8fa1(0x1c4)](/[^0-9]/g,'')+'@s.whatsapp.net';await _0x2e386d['groupParticipantsUpdate'](_0x313438['chat'],[_0xa67a3c],_0x3f8fa1(0x1b1))[_0x3f8fa1(0x1b5)](_0x402519=>_0x5468c2(jsonformat(_0x402519)))['catch'](_0x16bfc1=>_0x5468c2(jsonformat(_0x16bfc1))),_0x5468c2(_0x3f8fa1(0x1b8)),await _0x2e386d[_0x3f8fa1(0x1d6)](_0x2eb73d,{'react':{'text':'✅','key':_0x313438[_0x3f8fa1(0x1b3)]}});}catch(_0x23e1ad){_0x5468c2(_0x3f8fa1(0x1dd)),_0x46315a(_0x23e1ad);}}),cmd({'pattern':_0x396d40(0x1c0),'react':'❌','alias':[','],'desc':_0x396d40(0x1ae),'category':_0x396d40(0x1be),'use':'.del','filename':__filename},async(_0x28804f,_0x1d8503,_0x1e7213,{from:_0x1c4d7a,l:_0x2f57d5,quoted:_0x1dc329,body:_0x3c949a,isCmd:_0x52e48d,command:_0xb5b8fd,args:_0x312e29,q:_0x2a8343,isGroup:_0x3c5ef3,sender:_0x4ac488,senderNumber:_0x1fd7c6,botNumber2:_0x1c2e72,botNumber:_0x43c678,pushname:_0x4aeba3,isMe:_0x38efcf,isOwner:_0x4163ff,groupMetadata:_0x5e06fc,groupName:_0x2188c0,participants:_0x42662d,isItzcp:_0x21ce65,groupAdmins:_0x2cced4,isBotAdmins:_0x5c519f,isAdmins:_0x42699b,reply:_0x1be3cb})=>{const _0x289cfb=_0x396d40;if(!_0x4163ff||!_0x42699b)return;try{if(!_0x1e7213[_0x289cfb(0x1e3)])return _0x1be3cb(mg[_0x289cfb(0x1b9)]);const _0x46506a={'remoteJid':_0x1e7213[_0x289cfb(0x1c3)],'fromMe':![],'id':_0x1e7213[_0x289cfb(0x1e3)]['id'],'participant':_0x1e7213[_0x289cfb(0x1e3)][_0x289cfb(0x1b4)]};await _0x28804f[_0x289cfb(0x1d6)](_0x1e7213[_0x289cfb(0x1c3)],{'delete':_0x46506a});}catch(_0x255442){console[_0x289cfb(0x1c5)](_0x255442),_0x1be3cb('Error!!');}}),cmd({'pattern':_0x396d40(0x1bc),'desc':'Add\x20a\x20member\x20to\x20the\x20group.','category':_0x396d40(0x1be),'react':'➕','filename':__filename},async(_0x4a0a3d,_0x4adb04,_0x48ceb9,{from:_0x7543c9,quoted:_0x4a701c,body:_0x1471e3,isCmd:_0x1413bb,command:_0x1c8cb1,args:_0xcd4eff,q:_0x23c8e1,isGroup:_0x1d9c40,sender:_0x4a0e39,senderNumber:_0x11f76f,botNumber2:_0x5c4bd8,botNumber:_0x564f80,pushname:_0xb3362e,isMe:_0x39394e,isOwner:_0x2a1c7f,groupMetadata:_0x4341cb,groupName:_0x405cb5,participants:_0x1ebcc9,groupAdmins:_0x5c551b,isBotAdmins:_0x14d8a2,isAdmins:_0x28a01e,reply:_0x289c15})=>{const _0x324ca2=_0x396d40;try{if(!_0x1d9c40)return _0x289c15(_0x324ca2(0x1bf));if(!_0x14d8a2)return _0x289c15(_0x324ca2(0x1de));if(!_0x28a01e)return _0x289c15('You\x20must\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.');const _0xb15385=_0x23c8e1[_0x324ca2(0x1c6)]('\x20')[0x0];if(!_0xb15385)return _0x289c15('Please\x20provide\x20a\x20phone\x20number\x20to\x20add.');await _0x4a0a3d[_0x324ca2(0x1d3)](_0x7543c9,[_0xb15385+'@s.whatsapp.net'],'add'),await _0x289c15('@'+_0xb15385+_0x324ca2(0x1d7),{'mentions':[_0xb15385+_0x324ca2(0x1c7)]});}catch(_0x1c3b08){console[_0x324ca2(0x1c5)](_0x1c3b08),_0x289c15(''+_0x1c3b08);}}),cmd({'pattern':'setgoodbye','desc':'Set\x20the\x20goodbye\x20message\x20for\x20the\x20group.','category':_0x396d40(0x1be),'react':'👋','filename':__filename},async(_0x243a51,_0x3b3874,_0x19fdfb,{from:_0x542676,quoted:_0x324494,body:_0x42f1ee,isCmd:_0x374ba9,command:_0xd48e9b,args:_0x318170,q:_0x201efa,isGroup:_0x1084dd,sender:_0x493785,senderNumber:_0x12eede,botNumber2:_0x1861b5,botNumber:_0x3c4817,pushname:_0x9189af,isMe:_0x1bd3a6,isOwner:_0x231146,groupMetadata:_0x24d40d,groupName:_0x2b6811,participants:_0x1e0efb,groupAdmins:_0x5cc052,isBotAdmins:_0x3d8ece,isAdmins:_0x192492,reply:_0x2c5a80})=>{const _0x1894ba=_0x396d40;try{if(!_0x1084dd)return _0x2c5a80('This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group.');if(!_0x3d8ece)return _0x2c5a80(_0x1894ba(0x1de));if(!_0x192492)return _0x2c5a80(_0x1894ba(0x1db));const _0x4d835c=_0x201efa;if(!_0x4d835c)return _0x2c5a80(_0x1894ba(0x1dc));await _0x243a51['sendMessage'](_0x542676,{'image':{'url':config[_0x1894ba(0x1b7)]},'caption':_0x4d835c}),await _0x2c5a80(_0x1894ba(0x1e0));}catch(_0x568c78){console['log'](_0x568c78),_0x2c5a80(''+_0x568c78);}}),cmd({'pattern':'setwelcome','desc':_0x396d40(0x1c2),'category':_0x396d40(0x1be),'react':'👋','filename':__filename},async(_0x22afb8,_0x1e2ac4,_0x2a5ffb,{from:_0x33afc0,quoted:_0x2720c7,body:_0x363f71,isCmd:_0x345b6c,command:_0x3e2d39,args:_0x1fb8a8,q:_0xb1fa81,isGroup:_0x3a40f7,sender:_0x54a336,senderNumber:_0x2d729c,botNumber2:_0x12906,botNumber:_0x4f6901,pushname:_0x392e03,isMe:_0x2b756e,isOwner:_0x7cc676,groupMetadata:_0x1a1881,groupName:_0x225aac,participants:_0x25cd11,groupAdmins:_0x21bd91,isBotAdmins:_0x66aa0b,isAdmins:_0x1dec48,reply:_0x4f33dc})=>{const _0x33e505=_0x396d40;try{if(!_0x3a40f7)return _0x4f33dc(_0x33e505(0x1bf));if(!_0x66aa0b)return _0x4f33dc(_0x33e505(0x1de));if(!_0x1dec48)return _0x4f33dc('You\x20must\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.');const _0x406495=_0xb1fa81;if(!_0x406495)return _0x4f33dc('Please\x20provide\x20a\x20welcome\x20message.');await _0x22afb8['sendMessage'](_0x33afc0,{'image':{'url':config[_0x33e505(0x1b7)]},'caption':_0x406495}),await _0x4f33dc(_0x33e505(0x1d1));}catch(_0x5cae18){console[_0x33e505(0x1c5)](_0x5cae18),_0x4f33dc(''+_0x5cae18);}});
