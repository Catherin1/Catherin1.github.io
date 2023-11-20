
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var stories = [
'小明是个爱看热闹的人，他听说西巷发生了火灾，他急忙跑到了西巷，只见一群人围在了一起，怎么挤也挤不进去，然后他听到有人说：都烧成这样了，太可怜了...这时他想了一想，叫道：我是死者的亲友，让让，让让。这下终于挤了进去，一看原来烧死的是一只猪。',
'老师：小明，你给我解释一下锄禾日当午是什么意思？\r小明：老师，我还是滚出去吧。\r老师：等等，解释完了再滚也不迟。\r小明：好吧…豁出去了！比如：清明上河图啊，弯弓射大雕啊，重阳插茱萸啊，平方差公式啊，造血干细胞啊…\r老师：你以后语文课，历史课，数学课，生物课都可以滚出去了！',
'小明：家长会上老师表扬我了吗? 爸爸：没有，听了半天也没有听到你的名字。 小明：那老师念完表扬的同学的名字后说等等了吗? 爸爸：说了。 小明：那就是表扬我了，我一般就在等等里头。',
'爸爸问小明1+1的答案是几？小明说：“不知道。”爸爸说：“2个，笨蛋，那我+你是多少？”小明说：“2个笨蛋。',
'小明急匆匆的跑到办公室对老师说：老师，我下午要动手术，要请假。老师关心的问道：怎么？小明若有所思的说：人体无用副组织群体切除术老师：说人话。小明：额好吧，我要理发。老师怒吼道：滚。',
'小明理了头发，第二天来到学校，同学们看到他的新发型，笑道：小明，你的头型好像个风筝哦！小明觉得很委屈，就跑到外面哭。哭着哭着～他就飞起来了…………',
'有一天，小明很委屈地问奶奶：“奶奶，奶奶，你说我是不是个傻孩子啊？”奶奶回答说：“傻孩子，你怎么会是傻孩子呢？”',
];



randomize.addEventListener('click', result);

function setUserName() {
  let myName = customName.value;
  if(myName === '') {
      myName = '小明';
    } 
  return myName;
}

function result() {

  let name = setUserName();

  var text = randomValueFromArray(stories);
  console.log(text);
  text = text.replace(/小明/g,name);
  story.textContent = text;
  story.style.visibility = 'visible';
}
// result();