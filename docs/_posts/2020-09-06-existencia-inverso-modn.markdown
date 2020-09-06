---
layout: single
author_profile: true
title: "Existência de inverso módulo n"
date: 2020-09-06 15:52:00 -0300
categories: jekyll update
usemathjax: true
---

## Teorema: $$a$$ tem classe inversa $$(mod n)$$ sse $$mdc(a,n)=1$$.  

Resultado que usaremos na demonstração:  
A equação diofantina $$ax+by=c$$ tem solução sse $$mdc(a,b)$$ divide $$c$$.  

### Primeira parte:  
Se $$a$$ tem classe inversa $$(mod n)$$ então $$mdc(a,n)=1$$. Chamaremos de $$a'$$ a classe inversa de $$a$$.
$$aa' \equiv 1(mod n)$$, essa é a definição de classe inversa módulo $$n$$.  
$$aa' = nk + 1$$, onde $$k \in \mathbb{Z}$$. Essa é a definição da módulo congruência.  
$$aa'-nk = 1$$  
$$aa'+n(-k) = 1$$  
Agora temos uma equação diofantina da forma $$ax+by=c$$, onde $$x=a'$$, $$y=-k$$ e $$c=1$$. Portanto, a solução da equação diofantina é o par $$(a', -k)$$.  
Sabemos que "A equação diofantina $$ax+by=c$$ tem solução sse $$mdc(a,b)$$ divide $$c$$". Substituindo pelos nossos valores: "A equação diofantina $$ax+ny=1$$ tem solução sse $$mdc(a,n)$$ divide $$1$$."  
Já chegamos na afirmação de que $$(a', -k)$$ soluciona a nossa equação, portanto $$mdc(a,n)$$
divide $$1$$. Como o único natural que divide $$1$$ é ele mesmo, temos que $$mdc(a,n)=1$$, que é o que
queríamos demonstrar.  

### Segunda parte: 
Se $$mdc(a,n)=1$$ então $$a$$ tem classe inversa $$(mod n)$$.  
Considere a equação diofantina $$ax+ny$$=1. Sabemos que $$mdc(a,n) = 1$$ logo, usando a afirmação sobre equações diofantinas existem $$x_{0}$$ e $$y_{0}$$ tais que $$ax_{0}+ny_{0}=1$$.  
$$ax_{0}+ny_{0}=1$$.  
$$ax_{0}=1-ny_{0}$$.  
$$ax_{0}=-ny_{0}+1$$.  
$$ax_{0}=n(-y_{0})+1$$.  
Então $$ax_{0}$$ é igual a um multiplo de $$n$$ somado com $$1$$. Portanto $$ax_{0} \equiv 1(mod n)$$.  
Pela definição de classe inversa, sabemos então que $$x_{0}$$ é a classe inversa de $$a$$ módulo $$n$$.  
Portanto, $$a$$ tem classe inversa módulo $$n$$, que é o que queriamos demonstrar.  

Tendo provado a "ida" e a "volta" do teorema, provamos que "$$a$$ tem classe inversa $$(mod n)$$
sse $$mdc(a,n)=1$$".
