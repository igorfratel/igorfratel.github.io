---
layout: single
author_profile: true
title:  "Sistemas de Congruência"
date:   2020-09-06 15:52:00 -0300
categories: jekyll update
usemathjax: true
---
Problema clássico de aritmética modular:  


1) Em um cesto, há uma quantidade N de ovos.  
Se os ovos forem agrupados de 3 em 3, sobram 2.  
Se os ovos forem agrupados de 4 em 4, sobra 1.  
Quantos ovos pode haver no cesto?  

O problema pode ser escrito na seguinte notação:  
$$N \equiv 2(mod 3)$$   
$$N \equiv 1(mod 4)$$   

A primeira expressão significa "N dividido por 3 tem resto 2" e
assim por diante.  
Portanto, podemos reescrevê-las como:  
$$N = 3*a + 2, a \in \mathbb{N} $$  
$$N = 4*b + 1, b \in \mathbb{N} $$  

Podemos manipular essas expressões da seguinte forma, mantendo  
uma expressão na sua forma de módulo e a outra na sua forma de quociente e resto:  
$$N = 3*a + 2, a \in \mathbb{N} $$   
$$N \equiv 1(mod 4)$$   

$$3*a + 2 \equiv 1(mod 4)$$, substituindo N na segunda equação.  
$$3*a \equiv -1(mod 4)$$  
$$3*a \equiv 3(mod 4)$$, pois -1 e 3 são da mesma classe de equivalência módulo 4.  
$$a \equiv 1(mod4)$$, pois 3 e 4 são coprimos então vale a lei do corte  
$$a = 4*b + 1$$  

Agora vamos substituir o valor de $$a$$ na equação $$N = 3*a + 2$$.   
$$N = 3*(4*b + 1) + 2$$   
$$N = 12*b + 5$$  
$$N \equiv 5(mod 12)$$  

Portanto, o número de ovos pode ser qualquer número cuja divisão por 12 dê resto 5.  
