// Navi List
///////////////

var naviMega = {naviName : 'MegaMan.EXE',
                naviElem : 'None',
                naviHP   : '500',
                naviMB   : '170',
                naviStats: {Accuracy   : 'A',
                              Dodge    : 'B',
                              Priority : 'E'},
                naviAtk  : {Name    : 'ChargeShot',
                            Damage  : '50',
                            Effect  : 'Last Chip'},
                naviImg   : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/195-MegaMan.gif'
               };

var naviRoll = {naviName : 'Roll.EXE',
                naviElem : 'None',
                naviHP   : '400',
                naviMB   : '140',
                naviStats: {Accuracy   : 'C',
                            Dodge      : 'A',
                            Priority   : 'E'},
                naviAtk  : {Name    : 'HeartFlash',
                            Damage  : '50',
                            Effect  : 'Recover 50'},
                naviImg   : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/196-Roll.gif'
               };

var naviGuts = {naviName : 'GutsMan.EXE',
                naviElem : 'None',
                naviHP   : '600',
                naviMB   : '130',
                naviStats: {Accuracy   : 'C',
                            Dodge      : 'C',
                            Priority   : 'E'},
                naviAtk  : {Name    : 'GutsHammer',
                            Damage  : '70',
                            Effect  : 'Guard Break'},
                naviImg   : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/197-GutsMan.gif'
               };

var naviProto = {naviName : 'ProtoMan.EXE',
                 naviElem : 'None',
                 naviHP   : '500',
                 naviMB   : '160',
                 naviStats: {Accuracy   : 'B',
                             Dodge      : 'B',
                             Priority   : 'D'},
                 naviAtk  : {Name    : 'SonicBoom',
                             Damage  : '60',
                             Effect  : 'Random Chip'},
                 naviImg      : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/198-ProtoMan.gif'
                };

var naviTurbo = {naviName : 'TurboMan.EXE',
                 naviElem : 'None',
                 naviHP   : '550',
                 naviMB   : '160',
                 naviStats: {Accuracy   : 'A',
                             Dodge      : 'C',
                             Priority   : 'E'},
                 naviAtk  : {Name    : 'TurboWheel',
                             Damage  : '20',
                             Effect  : 'Fire, All'},
                 naviImg      : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/199-TurboMan.gif'
                };

var naviRing = {naviName : 'Ring.EXE',
                naviElem : 'None',
                naviHP   : '450',
                naviMB   : '150',
                naviStats: {Accuracy   : 'B',
                            Dodge      : 'A',
                            Priority   : 'E'},
                naviAtk  : {Name    : 'RingRang',
                            Damage  : '20 x 2',
                            Effect  : 'Elec, Last Chip'},
                naviImg   : 'http://www.sprites-inc.co.uk/files/EXE/MMBCC/Chips/200-Ring.gif'
               };

var naviList = [naviMega, naviRoll, naviGuts, naviProto, naviTurbo, naviRing];

var naviImg = [''];