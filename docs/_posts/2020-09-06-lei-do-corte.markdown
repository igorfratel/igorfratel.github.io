---
layout: single
author_profile: true
title:  "Lei do corte"
date:   2020-09-06 15:52:00 -0300
categories: jekyll update
usemathjax: true
---

Seja $$ax \equiv ay(modn)$$. Se $$mdc(a,n) = 1$$ então $$x \equiv y(modn)$$.  
$$Essa é a lei do corte, um corolário do teorema da existência do inverso módulo $$n$$.  
$$Teorema: $$a$$ tem classe inversa $$(mod n)$$ sse $$mdc(a,n)=1$$. 

### Prova:
$$Temos que $$ax \equiv ay(modn)$$.  
$$Usando a definição de módulo, chegamos em $$ax = kn + r$$ e $$ay = k'n + r$$.  
$$Sabemos que eles têm o mesmo resto mas não necessariamente $$o mesmo quociente. $$k$$ e $$k'$$ devem ser inteiros.  
$$Tomando a diferença entre as duas expressões temos:  
$$ax-ay = kn - k'n$$  
$$a(x-y) = n(k-k')$$    
Portanto, $$n$$ divide $$a(x-y)$$ (não tem resto).  
$$\frac{a(x-y)}{n} = (k-k')$$  
$$Se $$mdc(a,n) = 1$$, então $$n$$ não divide $$a$$, eles são coprimos.  
$$Sabendo que $$n$$ divide $$a(x-y)$$ e $$n$$ não divide $$a$$, então $$n$$ deve dividir $$x-y$$.  
$$Portanto, $$x-y \equiv 0(modn)$$  
$$x \equiv y(modn)$$, que é o que queríamos demonstrar.