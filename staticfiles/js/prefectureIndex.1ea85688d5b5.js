// var pref = [
//     ['都道府県を選択してください', ['市区町村で絞り込む']],
//     ['北海道', [0,'市区町村で絞り込む', '札幌市', '札幌市中央区', '札幌市北区', '札幌市東区', '札幌市白石区', '札幌市豊平区', '札幌市南区', '札幌市西区', '札幌市厚別区', '札幌市手稲区', '札幌市清田区', '函館市', '小樽市', '旭川市', '室蘭市', '釧路市', '帯広市', '北見市', '夕張市', '岩見沢市', '網走市', '留萌市', '苫小牧市', '稚内市', '美唄市', '芦別市', '江別市', '赤平市', '紋別市', '士別市', '名寄市', '三笠市', '根室市', '千歳市', '滝川市', '砂川市', '歌志内市', '深川市', '富良野市', '登別市', '恵庭市', '伊達市', '北広島市', '石狩市', '北斗市', '当別町', '新篠津村', '松前町', '福島町', '知内町', '木古内町', '七飯町', '鹿部町', '森町', '八雲町', '長万部町', '江差町', '上ノ国町', '厚沢部町', '乙部町', '奥尻町', '今金町', 'せたな町', '島牧村', '寿都町', '黒松内町', '蘭越町', 'ニセコ町', '真狩村', '留寿都村', '喜茂別町', '京極町', '倶知安町', '共和町', '岩内町', '泊村', '神恵内村', '積丹町', '古平町', '仁木町', '余市町', '赤井川村', '南幌町', '奈井江町', '上砂川町', '由仁町', '長沼町', '栗山町', '月形町', '浦臼町', '新十津川町', '妹背牛町', '秩父別町', '雨竜町', '北竜町', '沼田町', '鷹栖町', '東神楽町', '当麻町', '比布町', '愛別町', '上川町', '東川町', '美瑛町', '上富良野町', '中富良野町', '南富良野町', '占冠村', '和寒町', '剣淵町', '下川町', '美深町', '音威子府村', '中川町', '幌加内町', '増毛町', '小平町', '苫前町', '羽幌町', '初山別村', '遠別町', '天塩町', '猿払村', '浜頓別町', '中頓別町', '枝幸町', '豊富町', '礼文町', '利尻町', '利尻富士町', '幌延町', '美幌町', '津別町', '斜里町', '清里町', '小清水町', '訓子府町', '置戸町', '佐呂間町', '遠軽町', '湧別町', '滝上町', '興部町', '西興部村', '雄武町', '大空町', '豊浦町', '壮瞥町', '白老町', '厚真町', '洞爺湖町', '安平町', 'むかわ町', '日高町', '平取町', '新冠町', '浦河町', '様似町', 'えりも町', '新ひだか町', '音更町', '士幌町', '上士幌町', '鹿追町', '新得町', '清水町', '芽室町', '中札内村', '更別村', '大樹町', '広尾町', '幕別町', '池田町', '豊頃町', '本別町', '足寄町', '陸別町', '浦幌町', '釧路町', '厚岸町', '浜中町', '標茶町', '弟子屈町', '鶴居村', '白糠町', '別海町', '中標津町', '標津町', '羅臼町', '色丹村', '泊村', '留夜別村', '留別村', '紗那村', '蘂取村']],
//     ['青森県', [0,'市区町村で絞り込む', '青森市', '弘前市', '八戸市', '黒石市', '五所川原市', '十和田市', '三沢市', 'むつ市', 'つがる市', '平川市', '平内町', '今別町', '蓬田村', '外ヶ浜町', '鰺ヶ沢町', '深浦町', '西目屋村', '藤崎町', '大鰐町', '田舎館村', '板柳町', '鶴田町', '中泊町', '野辺地町', '七戸町', '六戸町', '横浜町', '東北町', '六ヶ所村', 'おいらせ町', '大間町', '東通村', '風間浦村', '佐井村', '三戸町', '五戸町', '田子町', '南部町', '階上町', '新郷村']],
//     ['岩手県', [0,'市区町村で絞り込む', '盛岡市', '宮古市', '大船渡市', '花巻市', '北上市', '久慈市', '遠野市', '一関市', '陸前高田市', '釜石市', '二戸市', '八幡平市', '奥州市', '滝沢市', '雫石町', '葛巻町', '岩手町', '紫波町', '矢巾町', '西和賀町', '金ケ崎町', '平泉町', '住田町', '大槌町', '山田町', '岩泉町', '田野畑村', '普代村', '軽米町', '野田村', '九戸村', '洋野町', '一戸町']],
//     ['宮城県', [0,'市区町村で絞り込む', '仙台市', '仙台市青葉区', '仙台市宮城野区', '仙台市若林区', '仙台市太白区', '仙台市泉区', '石巻市', '塩竈市', '気仙沼市', '白石市', '名取市', '角田市', '多賀城市', '岩沼市', '登米市', '栗原市', '東松島市', '大崎市', '富谷市', '蔵王町', '七ヶ宿町', '大河原町', '村田町', '柴田町', '川崎町', '丸森町', '亘理町', '山元町', '松島町', '七ヶ浜町', '利府町', '大和町', '大郷町', '大衡村', '色麻町', '加美町', '涌谷町', '美里町', '女川町', '南三陸町']],
//     ['秋田県', [0,'市区町村で絞り込む', '秋田市', '能代市', '横手市', '大館市', '男鹿市', '湯沢市', '鹿角市', '由利本荘市', '潟上市', '大仙市', '北秋田市', 'にかほ市', '仙北市', '小坂町', '上小阿仁村', '藤里町', '三種町', '八峰町', '五城目町', '八郎潟町', '井川町', '大潟村', '美郷町', '羽後町', '東成瀬村']],
//     ['山形県', [0,'市区町村で絞り込む', '山形市', '米沢市', '鶴岡市', '酒田市', '新庄市', '寒河江市', '上山市', '村山市', '長井市', '天童市', '東根市', '尾花沢市', '南陽市', '山辺町', '中山町', '河北町', '西川町', '朝日町', '大江町', '大石田町', '金山町', '最上町', '舟形町', '真室川町', '大蔵村', '鮭川村', '戸沢村', '高畠町', '川西町', '小国町', '白鷹町', '飯豊町', '三川町', '庄内町', '遊佐町']],
//     ['福島県', [0,'市区町村で絞り込む', '福島市', '会津若松市', '郡山市', 'いわき市', '白河市', '須賀川市', '喜多方市', '相馬市', '二本松市', '田村市', '南相馬市', '伊達市', '本宮市', '桑折町', '国見町', '川俣町', '大玉村', '鏡石町', '天栄村', '下郷町', '檜枝岐村', '只見町', '南会津町', '北塩原村', '西会津町', '磐梯町', '猪苗代町', '会津坂下町', '湯川村', '柳津町', '三島町', '金山町', '昭和村', '会津美里町', '西郷村', '泉崎村', '中島村', '矢吹町', '棚倉町', '矢祭町', '塙町', '鮫川村', '石川町', '玉川村', '平田村', '浅川町', '古殿町', '三春町', '小野町', '広野町', '楢葉町', '富岡町', '川内村', '大熊町', '双葉町', '浪江町', '葛尾村', '新地町', '飯舘村']],
//     ['茨城県', [0,'市区町村で絞り込む', '水戸市', '日立市', '土浦市', '古河市', '石岡市', '結城市', '龍ケ崎市', '下妻市', '常総市', '常陸太田市', '高萩市', '北茨城市', '笠間市', '取手市', '牛久市', 'つくば市', 'ひたちなか市', '鹿嶋市', '潮来市', '守谷市', '常陸大宮市', '那珂市', '筑西市', '坂東市', '稲敷市', 'かすみがうら市', '桜川市', '神栖市', '行方市', '鉾田市', 'つくばみらい市', '小美玉市', '茨城町', '大洗町', '城里町', '東海村', '大子町', '美浦村', '阿見町', '河内町', '八千代町', '五霞町', '境町', '利根町']],
//     ['栃木県', [0,'市区町村で絞り込む', '宇都宮市', '足利市', '栃木市', '佐野市', '鹿沼市', '日光市', '小山市', '真岡市', '大田原市', '矢板市', '那須塩原市', 'さくら市', '那須烏山市', '下野市', '上三川町', '益子町', '茂木町', '市貝町', '芳賀町', '壬生町', '野木町', '塩谷町', '高根沢町', '那須町', '那珂川町']],
//     ['群馬県', [0,'市区町村で絞り込む', '前橋市', '高崎市', '桐生市', '伊勢崎市', '太田市', '沼田市', '館林市', '渋川市', '藤岡市', '富岡市', '安中市', 'みどり市', '榛東村', '吉岡町', '上野村', '神流町', '下仁田町', '南牧村', '甘楽町', '中之条町', '長野原町', '嬬恋村', '草津町', '高山村', '東吾妻町', '片品村', '川場村', '昭和村', 'みなかみ町', '玉村町', '板倉町', '明和町', '千代田町', '大泉町', '邑楽町']],
//     ['埼玉県', [0,'市区町村で絞り込む', 'さいたま市', 'さいたま市西区', 'さいたま市北区', 'さいたま市大宮区', 'さいたま市見沼区', 'さいたま市中央区', 'さいたま市桜区', 'さいたま市浦和区', 'さいたま市南区', 'さいたま市緑区', 'さいたま市岩槻区', '川越市', '熊谷市', '川口市', '行田市', '秩父市', '所沢市', '飯能市', '加須市', '本庄市', '東松山市', '春日部市', '狭山市', '羽生市', '鴻巣市', '深谷市', '上尾市', '草加市', '越谷市', '蕨市', '戸田市', '入間市', '朝霞市', '志木市', '和光市', '新座市', '桶川市', '久喜市', '北本市', '八潮市', '富士見市', '三郷市', '蓮田市', '坂戸市', '幸手市', '鶴ケ島市', '日高市', '吉川市', 'ふじみ野市', '白岡市', '伊奈町', '三芳町', '毛呂山町', '越生町', '滑川町', '嵐山町', '小川町', '川島町', '吉見町', '鳩山町', 'ときがわ町', '横瀬町', '皆野町', '長瀞町', '小鹿野町', '東秩父村', '美里町', '神川町', '上里町', '寄居町', '宮代町', '杉戸町', '松伏町']],
//     ['千葉県', [0,'市区町村で絞り込む', '千葉市', '千葉市中央区', '千葉市花見川区', '千葉市稲毛区', '千葉市若葉区', '千葉市緑区', '千葉市美浜区', '銚子市', '市川市', '船橋市', '館山市', '木更津市', '松戸市', '野田市', '茂原市', '成田市', '佐倉市', '東金市', '旭市', '習志野市', '柏市', '勝浦市', '市原市', '流山市', '八千代市', '我孫子市', '鴨川市', '鎌ケ谷市', '君津市', '富津市', '浦安市', '四街道市', '袖ケ浦市', '八街市', '印西市', '白井市', '富里市', '南房総市', '匝瑳市', '香取市', '山武市', 'いすみ市', '大網白里市', '酒々井町', '栄町', '神崎町', '多古町', '東庄町', '九十九里町', '芝山町', '横芝光町', '一宮町', '睦沢町', '長生村', '白子町', '長柄町', '長南町', '大多喜町', '御宿町', '鋸南町']],
//     ['東京都', [0,'市区町村で絞り込む', '千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区', '品川区', '目黒区', '大田区', '世田谷区', '渋谷区', '中野区', '杉並区', '豊島区', '北区', '荒川区', '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区', '八王子市', '立川市', '武蔵野市', '三鷹市', '青梅市', '府中市', '昭島市', '調布市', '町田市', '小金井市', '小平市', '日野市', '東村山市', '国分寺市', '国立市', '福生市', '狛江市', '東大和市', '清瀬市', '東久留米市', '武蔵村山市', '多摩市', '稲城市', '羽村市', 'あきる野市', '西東京市', '瑞穂町', '日の出町', '檜原村', '奥多摩町', '大島町', '利島村', '新島村', '神津島村', '三宅村', '御蔵島村', '八丈町', '青ヶ島村', '小笠原村']],
//     ['神奈川県', [0,'市区町村で絞り込む', '横浜市', '横浜市鶴見区', '横浜市神奈川区', '横浜市西区', '横浜市中区', '横浜市南区', '横浜市保土ケ谷区', '横浜市磯子区', '横浜市金沢区', '横浜市港北区', '横浜市戸塚区', '横浜市港南区', '横浜市旭区', '横浜市緑区', '横浜市瀬谷区', '横浜市栄区', '横浜市泉区', '横浜市青葉区', '横浜市都筑区', '川崎市', '川崎市川崎区', '川崎市幸区', '川崎市中原区', '川崎市高津区', '川崎市多摩区', '川崎市宮前区', '川崎市麻生区', '相模原市', '相模原市緑区', '相模原市中央区', '相模原市南区', '横須賀市', '平塚市', '鎌倉市', '藤沢市', '小田原市', '茅ヶ崎市', '逗子市', '三浦市', '秦野市', '厚木市', '大和市', '伊勢原市', '海老名市', '座間市', '南足柄市', '綾瀬市', '葉山町', '寒川町', '大磯町', '二宮町', '中井町', '大井町', '松田町', '山北町', '開成町', '箱根町', '真鶴町', '湯河原町', '愛川町', '清川村']],
//     ['新潟県', [0,'市区町村で絞り込む', '新潟市', '新潟市北区', '新潟市東区', '新潟市中央区新潟市', '新潟市江南区', '新潟市秋葉区', '新潟市南区', '新潟市西区', '新潟市西蒲区', '長岡市', '三条市', '柏崎市', '新発田市', '小千谷市', '加茂市', '十日町市', '見附市', '村上市', '燕市', '糸魚川市', '妙高市', '五泉市', '上越市', '阿賀野市', '佐渡市', '魚沼市', '南魚沼市', '胎内市', '聖籠町', '弥彦村', '田上町', '阿賀町', '出雲崎町', '湯沢町', '津南町', '刈羽村', '関川村', '粟島浦村']],
//     ['富山県', [0,'市区町村で絞り込む', '富山市', '高岡市', '魚津市', '氷見市', '滑川市', '黒部市', '砺波市', '小矢部市', '南砺市', '射水市', '舟橋村', '上市町', '立山町', '入善町', '朝日町']],
//     ['石川県', [0,'市区町村で絞り込む', '金沢市', '七尾市', '小松市', '輪島市', '珠洲市', '加賀市', '羽咋市', 'かほく市', '白山市', '能美市', '野々市市', '川北町', '津幡町', '内灘町', '志賀町', '宝達志水町', '中能登町', '穴水町', '能登町']],
//     ['福井県', [0,'市区町村で絞り込む', '福井市', '敦賀市', '小浜市', '大野市', '勝山市', '鯖江市', 'あわら市', '越前市', '坂井市', '永平寺町', '池田町', '南越前町', '越前町', '美浜町', '高浜町', 'おおい町', '若狭町']],
//     ['山梨県', [0,'市区町村で絞り込む', '甲府市', '富士吉田市', '都留市', '山梨市', '大月市', '韮崎市', '南アルプス市', '北杜市', '甲斐市', '笛吹市', '上野原市', '甲州市', '中央市', '市川三郷町', '早川町', '身延町', '南部町', '富士川町', '昭和町', '道志村', '西桂町', '忍野村', '山中湖村', '鳴沢村', '富士河口湖町', '小菅村', '丹波山村']],
//     ['長野県', [0,'市区町村で絞り込む', '長野市', '松本市', '上田市', '岡谷市', '飯田市', '諏訪市', '須坂市', '小諸市', '伊那市', '駒ヶ根市', '中野市', '大町市', '飯山市', '茅野市', '塩尻市', '佐久市', '千曲市', '東御市', '安曇野市', '小海町', '川上村', '南牧村', '南相木村', '北相木村', '佐久穂町', '軽井沢町', '御代田町', '立科町', '青木村', '長和町', '下諏訪町', '富士見町', '原村', '辰野町', '箕輪町', '飯島町', '南箕輪村', '中川村', '宮田村', '松川町', '高森町', '阿南町', '阿智村', '平谷村', '根羽村', '下條村', '売木村', '天龍村', '泰阜村', '喬木村', '豊丘村', '大鹿村', '上松町', '南木曽町', '木祖村', '王滝村', '大桑村', '木曽町', '麻績村', '生坂村', '山形村', '朝日村', '筑北村', '池田町', '松川村', '白馬村', '小谷村', '坂城町', '小布施町', '高山村', '山ノ内町', '木島平村', '野沢温泉村', '信濃町', '小川村', '飯綱町', '栄村']],
//     ['岐阜県', [0,'市区町村で絞り込む', '岐阜市', '大垣市', '高山市', '多治見市', '関市', '中津川市', '美濃市', '瑞浪市', '羽島市', '恵那市', '美濃加茂市', '土岐市', '各務原市', '可児市', '山県市', '瑞穂市', '飛騨市', '本巣市', '郡上市', '下呂市', '海津市', '岐南町', '笠松町', '養老町', '垂井町', '関ケ原町', '神戸町', '輪之内町', '安八町', '揖斐川町', '大野町', '池田町', '北方町', '坂祝町', '富加町', '川辺町', '七宗町', '八百津町', '白川町', '東白川村', '御嵩町', '白川村']],
//     ['静岡県', [0,'市区町村で絞り込む', '静岡市', '静岡市葵区', '静岡市駿河区', '静岡市清水区', '静岡市浜松市', '静岡市中区', '静岡市東区', '静岡市西区', '静岡市南区', '静岡市北区', '静岡市浜北区', '静岡市天竜区', '沼津市', '熱海市', '三島市', '富士宮市', '伊東市', '島田市', '富士市', '磐田市', '焼津市', '掛川市', '藤枝市', '御殿場市', '袋井市', '下田市', '裾野市', '湖西市', '伊豆市', '御前崎市', '菊川市', '伊豆の国市', '牧之原市', '東伊豆町', '河津町', '南伊豆町', '松崎町', '西伊豆町', '函南町', '清水町', '長泉町', '小山町', '吉田町', '川根本町', '森町']],
//     ['愛知県', [0,'市区町村で絞り込む', '名古屋市', '名古屋市千種区', '名古屋市東区', '名古屋市北区', '名古屋市西区', '名古屋市中村区', '名古屋市中区', '名古屋市昭和区', '名古屋市瑞穂区', '名古屋市熱田区', '名古屋市中川区', '名古屋市港区', '名古屋市南区', '名古屋市守山区', '名古屋市緑区', '名古屋市名東区', '名古屋市天白区', '豊橋市', '岡崎市', '一宮市', '瀬戸市', '半田市', '春日井市', '豊川市', '津島市', '碧南市', '刈谷市', '豊田市', '安城市', '西尾市', '蒲郡市', '犬山市', '常滑市', '江南市', '小牧市', '稲沢市', '新城市', '東海市', '大府市', '知多市', '知立市', '尾張旭市', '高浜市', '岩倉市', '豊明市', '日進市', '田原市', '愛西市', '清須市', '北名古屋市', '弥富市', 'みよし市', 'あま市', '長久手市', '東郷町', '豊山町', '大口町', '扶桑町', '大治町', '蟹江町', '飛島村', '阿久比町', '東浦町', '南知多町', '美浜町', '武豊町', '幸田町', '設楽町', '東栄町', '豊根村']],
//     ['三重県', [0,'市区町村で絞り込む', '津市', '四日市市', '伊勢市', '松阪市', '桑名市', '鈴鹿市', '名張市', '尾鷲市', '亀山市', '鳥羽市', '熊野市', 'いなべ市', '志摩市', '伊賀市', '木曽岬町', '東員町', '菰野町', '朝日町', '川越町', '多気町', '明和町', '大台町', '玉城町', '度会町', '大紀町', '南伊勢町', '紀北町', '御浜町', '紀宝町']],
//     ['滋賀県', [0,'市区町村で絞り込む', '大津市', '彦根市', '長浜市', '近江八幡市', '草津市', '守山市', '栗東市', '甲賀市', '野洲市', '湖南市', '高島市', '東近江市', '米原市', '日野町', '竜王町', '愛荘町', '豊郷町', '甲良町', '多賀町']],
//     ['京都府', [0,'市区町村で絞り込む', '京都市', '京都市北区', '京都市上京区', '京都市左京区', '京都市中京区', '京都市東山区', '京都市下京区', '京都市南区', '京都市右京区', '京都市伏見区', '京都市山科区', '京都市西京区', '福知山市', '舞鶴市', '綾部市', '宇治市', '宮津市', '亀岡市', '城陽市', '向日市', '長岡京市', '八幡市', '京田辺市', '京丹後市', '南丹市', '木津川市', '大山崎町', '久御山町', '井手町', '宇治田原町', '笠置町', '和束町', '精華町', '南山城村', '京丹波町', '伊根町', '与謝野町']],
//     ['大阪府', [0,'市区町村で絞り込む', '大阪市', '大阪市都島区', '大阪市福島区', '大阪市此花区', '大阪市西区', '大阪市港区', '大阪市大正区', '大阪市天王寺区', '大阪市浪速区', '大阪市西淀川区', '大阪市東淀川区', '大阪市東成区', '大阪市生野区', '大阪市旭区', '大阪市城東区', '大阪市阿倍野区', '大阪市住吉区', '大阪市東住吉区', '大阪市西成区', '大阪市淀川区', '大阪市鶴見区', '大阪市住之江区', '大阪市平野区', '大阪市北区', '大阪市中央区', '堺市', '堺市堺区', '堺市中区', '堺市東区', '堺市西区', '堺市南区', '堺市北区', '堺市美原区', '岸和田市', '豊中市', '池田市', '吹田市', '泉大津市', '高槻市', '貝塚市', '守口市', '枚方市', '茨木市', '八尾市', '泉佐野市', '富田林市', '寝屋川市', '河内長野市', '松原市', '大東市', '和泉市', '箕面市', '柏原市', '羽曳野市', '門真市', '摂津市', '高石市', '藤井寺市', '東大阪市', '泉南市', '四條畷市', '交野市', '大阪狭山市', '阪南市', '島本町', '豊能町', '能勢町', '忠岡町', '熊取町', '田尻町', '岬町', '太子町', '河南町', '千早赤阪村']],
//     ['兵庫県', [0,'市区町村で絞り込む', '神戸市', '神戸市東灘区', '神戸市灘区', '神戸市兵庫区', '神戸市長田区', '神戸市須磨区', '神戸市垂水区', '神戸市北区', '神戸市中央区', '神戸市西区', '姫路市', '尼崎市', '明石市', '西宮市', '洲本市', '芦屋市', '伊丹市', '相生市', '豊岡市', '加古川市', '赤穂市', '西脇市', '宝塚市', '三木市', '高砂市', '川西市', '小野市', '三田市', '加西市', '丹波篠山市', '養父市', '丹波市', '南あわじ市', '朝来市', '淡路市', '宍粟市', '加東市', 'たつの市', '猪名川町', '多可町', '稲美町', '播磨町', '市川町', '福崎町', '神河町', '太子町', '上郡町', '佐用町', '香美町', '新温泉町']],
//     ['奈良県', [0,'市区町村で絞り込む', '奈良市', '大和高田市', '大和郡山市', '天理市', '橿原市', '桜井市', '五條市', '御所市', '生駒市', '香芝市', '葛城市', '宇陀市', '山添村', '平群町', '三郷町', '斑鳩町', '安堵町', '川西町', '三宅町', '田原本町', '曽爾村', '御杖村', '高取町', '明日香村', '上牧町', '王寺町', '広陵町', '河合町', '吉野町', '大淀町', '下市町', '黒滝村', '天川村', '野迫川村', '十津川村', '下北山村', '上北山村', '川上村', '東吉野村']],
//     ['和歌山県', [0,'市区町村で絞り込む', '和歌山市', '海南市', '橋本市', '有田市', '御坊市', '田辺市', '新宮市', '紀の川市', '岩出市', '紀美野町', 'かつらぎ町', '九度山町', '高野町', '湯浅町', '広川町', '有田川町', '美浜町', '日高町', '由良町', '印南町', 'みなべ町', '日高川町', '白浜町', '上富田町', 'すさみ町', '那智勝浦町', '太地町', '古座川町', '北山村', '串本町']],
//     ['鳥取県', [0,'市区町村で絞り込む', '鳥取市', '米子市', '倉吉市', '境港市', '岩美町', '若桜町', '智頭町', '八頭町', '三朝町', '湯梨浜町', '琴浦町', '北栄町', '日吉津村', '大山町', '南部町', '伯耆町', '日南町', '日野町', '江府町']],
//     ['島根県', [0,'市区町村で絞り込む', '松江市', '浜田市', '出雲市', '益田市', '大田市', '安来市', '江津市', '雲南市', '奥出雲町', '飯南町', '川本町', '美郷町', '邑南町', '津和野町', '吉賀町', '海士町', '西ノ島町', '知夫村', '隠岐の島町']],
//     ['岡山県', [0,'市区町村で絞り込む', '岡山市', '岡山市北区', '岡山市中区', '岡山市東区', '岡山市南区', '倉敷市', '津山市', '玉野市', '笠岡市', '井原市', '総社市', '高梁市', '新見市', '備前市', '瀬戸内市', '赤磐市', '真庭市', '美作市', '浅口市', '和気町', '早島町', '里庄町', '矢掛町', '新庄村', '鏡野町', '勝央町', '奈義町', '西粟倉村', '久米南町', '美咲町', '吉備中央町']],
//     ['広島県', [0,'市区町村で絞り込む', '広島市', '広島市中区', '広島市東区', '広島市南区', '広島市西区', '広島市安佐南区', '広島市安佐北区', '広島市安芸区', '広島市佐伯区', '呉市', '竹原市', '三原市', '尾道市', '福山市', '府中市', '三次市', '庄原市', '大竹市', '東広島市', '廿日市市', '安芸高田市', '江田島市', '府中町', '海田町', '熊野町', '坂町', '安芸太田町', '北広島町', '大崎上島町', '世羅町', '神石高原町']],
//     ['山口県', [0,'市区町村で絞り込む', '下関市', '宇部市', '山口市', '萩市', '防府市', '下松市', '岩国市', '光市', '長門市', '柳井市', '美祢市', '周南市', '山陽小野田市', '周防大島町', '和木町', '上関町', '田布施町', '平生町', '阿武町']],
//     ['徳島県', [0,'市区町村で絞り込む', '徳島市', '鳴門市', '小松島市', '阿南市', '吉野川市', '阿波市', '美馬市', '三好市', '勝浦町', '上勝町', '佐那河内村', '石井町', '神山町', '那賀町', '牟岐町', '美波町', '海陽町', '松茂町', '北島町', '藍住町', '板野町', '上板町', 'つるぎ町', '東みよし町']],
//     ['香川県', [0,'市区町村で絞り込む', '高松市', '丸亀市', '坂出市', '善通寺市', '観音寺市', 'さぬき市', '東かがわ市', '三豊市', '土庄町', '小豆島町', '三木町', '直島町', '宇多津町', '綾川町', '琴平町', '多度津町', 'まんのう町']],
//     ['愛媛県', [0,'市区町村で絞り込む', '松山市', '今治市', '宇和島市', '八幡浜市', '新居浜市', '西条市', '大洲市', '伊予市', '四国中央市', '西予市', '東温市', '上島町', '久万高原町', '松前町', '砥部町', '内子町', '伊方町', '松野町', '鬼北町', '愛南町']],
//     ['高知県', [0,'市区町村で絞り込む', '高知市', '室戸市', '安芸市', '南国市', '土佐市', '須崎市', '宿毛市', '土佐清水市', '四万十市', '香南市', '香美市', '東洋町', '奈半利町', '田野町', '安田町', '北川村', '馬路村', '芸西村', '本山町', '大豊町', '土佐町', '大川村', 'いの町', '仁淀川町', '中土佐町', '佐川町', '越知町', '檮原町', '日高村', '津野町', '四万十町', '大月町', '三原村', '黒潮町']],
//     ['福岡県', [0,'市区町村で絞り込む', '北九州市', '北九州市門司区', '北九州市若松区', '北九州市戸畑区', '北九州市小倉北区', '北九州市小倉南区', '北九州市八幡東区', '北九州市八幡西区', '福岡市', '福岡市東区', '福岡市博多区', '福岡市中央区', '福岡市南区', '福岡市西区', '福岡市城南区', '福岡市早良区', '大牟田市', '久留米市', '直方市', '飯塚市', '田川市', '柳川市', '八女市', '筑後市', '大川市', '行橋市', '豊前市', '中間市', '小郡市', '筑紫野市', '春日市', '大野城市', '宗像市', '太宰府市', '古賀市', '福津市', 'うきは市', '宮若市', '嘉麻市', '朝倉市', 'みやま市', '糸島市', '那珂川市', '宇美町', '篠栗町', '志免町', '須恵町', '新宮町', '久山町', '粕屋町', '芦屋町', '水巻町', '岡垣町', '遠賀町', '小竹町', '鞍手町', '桂川町', '筑前町', '東峰村', '大刀洗町', '大木町', '広川町', '香春町', '添田町', '糸田町', '川崎町', '大任町', '赤村', '福智町', '苅田町', 'みやこ町', '吉富町', '上毛町', '築上町']],
//     ['佐賀県', [0,'市区町村で絞り込む', '佐賀市', '唐津市', '鳥栖市', '多久市', '伊万里市', '武雄市', '鹿島市', '小城市', '嬉野市', '神埼市', '吉野ヶ里町', '基山町', '上峰町', 'みやき町', '玄海町', '有田町', '大町町', '江北町', '白石町', '太良町']],
//     ['長崎県', [0,'市区町村で絞り込む', '長崎市', '佐世保市', '島原市', '諫早市', '大村市', '平戸市', '松浦市', '対馬市', '壱岐市', '五島市', '西海市', '雲仙市', '南島原市', '長与町', '時津町', '東彼杵町', '川棚町', '波佐見町', '小値賀町', '佐々町', '新上五島町']],
//     ['熊本県', [0,'市区町村で絞り込む', '熊本市', '熊本市中央区', '熊本市東区', '熊本市西区', '熊本市南区', '熊本市北区', '八代市', '人吉市', '荒尾市', '水俣市', '玉名市', '山鹿市', '菊池市', '宇土市', '上天草市', '宇城市', '阿蘇市', '天草市', '合志市', '美里町', '玉東町', '南関町', '長洲町', '和水町', '大津町', '菊陽町', '南小国町', '小国町', '産山村', '高森町', '西原村', '南阿蘇村', '御船町', '嘉島町', '益城町', '甲佐町', '山都町', '氷川町', '芦北町', '津奈木町', '錦町', '多良木町', '湯前町', '水上村', '相良村', '五木村', '山江村', '球磨村', 'あさぎり町', '苓北町']],
//     ['大分県', [0,'市区町村で絞り込む', '大分市', '別府市', '中津市', '日田市', '佐伯市', '臼杵市', '津久見市', '竹田市', '豊後高田市', '杵築市', '宇佐市', '豊後大野市', '由布市', '国東市', '姫島村', '日出町', '九重町', '玖珠町']],
//     ['宮崎県', [0,'市区町村で絞り込む', '宮崎市', '都城市', '延岡市', '日南市', '小林市', '日向市', '串間市', '西都市', 'えびの市', '三股町', '高原町', '国富町', '綾町', '高鍋町', '新富町', '西米良村', '木城町', '川南町', '都農町', '門川町', '諸塚村', '椎葉村', '美郷町', '高千穂町', '日之影町', '五ヶ瀬町']],
//     ['鹿児島県', [0,'市区町村で絞り込む', '鹿児島市', '鹿屋市', '枕崎市', '阿久根市', '出水市', '指宿市', '西之表市', '垂水市', '薩摩川内市', '日置市', '曽於市', '霧島市', 'いちき串木野市', '南さつま市', '志布志市', '奄美市', '南九州市', '伊佐市', '姶良市', '三島村', '十島村', 'さつま町', '長島町', '湧水町', '大崎町', '東串良町', '錦江町', '南大隅町', '肝付町', '中種子町', '南種子町', '屋久島町', '大和村', '宇検村', '瀬戸内町', '龍郷町', '喜界町', '徳之島町', '天城町', '伊仙町', '和泊町', '知名町', '与論町']],
//     ['沖縄県', [0,'市区町村で絞り込む', '那覇市', '宜野湾市', '石垣市', '浦添市', '名護市', '糸満市', '沖縄市', '豊見城市', 'うるま市', '宮古島市', '南城市', '国頭村', '大宜味村', '東村', '今帰仁村', '本部町', '恩納村', '宜野座村', '金武町', '伊江村', '読谷村', '嘉手納町', '北谷町', '北中城村', '中城村', '西原町', '与那原町', '南風原町', '渡嘉敷村', '座間味村', '粟国村', '渡名喜村', '南大東村', '北大東村', '伊平屋村', '伊是名村', '久米島町', '八重瀬町', '多良間村', '竹富町', '与那国町']]
// ];

// var city = ['場所を選択してください', '千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区', '品川区', '目黒区', '大田区', '世田谷区', '渋谷区', '中野区', '杉並区', '豊島区', '北区', '荒川区', '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区', '八王子市', '立川市', '武蔵野市', '三鷹市', '青梅市', '府中市', '昭島市', '調布市', '町田市', '小金井市', '小平市', '日野市', '東村山市', '国分寺市', '国立市', '福生市', '狛江市', '東大和市', '清瀬市', '東久留米市', '武蔵村山市', '多摩市', '稲城市', '羽村市', 'あきる野市', '西東京市', '瑞穂町', '日の出町', '檜原村', '奥多摩町', '大島町', '利島村', '新島村', '神津島村', '三宅村', '御蔵島村', '八丈町', '青ヶ島村', '小笠原村']
var city = ['場所を選択してください', '千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区', '品川区', '目黒区', '大田区', '世田谷区', '渋谷区', '中野区', '杉並区', '豊島区', '北区', '荒川区', '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区', '八王子市', '立川市', '武蔵野市', '三鷹市', '府中市', '調布市', '町田市', '小金井市', '多摩市']


$(function () {
    var cityOption = '',
        value,
        citydata,
        cityLength = city.length;
    for (var i = 1; i < cityLength; i++) {
        citydata = city[i]
        value = citydata;
        value_id = i;
        // cityOption += '<label class="custom-check"><input class="city_class" type="radio" value="' + value + '" name="pref"/><span class="check-btn"><i class="las la-check"></i><div class="hobbies-icon-check"><h3>' + value + '</h3></div></span></label>'
        cityOption += '<label class="custom-check"><input type="checkbox" value="' + value + '" name="city"/><span class="check-btn"><i class="las la-check"></i><div class="hobbies-icon-check"><h3>' + value + '</h3></div></span></label>'
        $('#city_area').html(cityOption);
    }
});