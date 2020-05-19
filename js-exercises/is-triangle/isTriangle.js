function isTriangle(a,b,c) {
 if(a>b && a>b)
  {
    if(a<b+c)
    return true
    else
    return false
  }
 else if(b>c)
  {
    if(b<a+c)
    return true
    else
    return false
  }
 else
  {
    if(c<b+a)
    return true
    else
    return false
  }


return false
}

export {
  isTriangle,
};
