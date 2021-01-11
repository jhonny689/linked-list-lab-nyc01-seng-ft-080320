function getName (obj){
  return !!obj.name ? obj.name : null;
}

function headNode(linkedList, obj){
  return obj[linkedList];
}

function next(node, obj){
  return obj[node.next];
}

function nodeAt(index, head, obj){
  let current = obj[head];
  //console.log(current, current.next);
  for (let i = 0; i < index; i++){
    current = obj[current.next];
  }
  return current;
}

function addressAt(index, head, obj){
  
  return Object.keys(obj).find(key => obj[key] === nodeAt(index,head,obj));
}

function indexAt(node, obj, head){
  
}