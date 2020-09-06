---
layout: single
author_profile: true
title:  "Por que o RSA funciona?"
date:   2020-09-06 15:52:00 -0300
categories: jekyll update
usemathjax: true
---

Codificando: $$b^3 \equiv b' (mod p*q)$$.  
Decodificando: $$b'^d \equiv e(modp*q)$$.  

Usaremos o teorema de Fermat, que diz:  
Se  $$m$$ é primo, então para qualquer $$a$$ tal que $$mdc(a,m)=1$$, temos:  
$$a^{m-1}\equiv 1 (mod (m)$$.

Queremos provar que $$e$$ é igual ao $$b$$ original.  
$$e \equiv b'^d mod(p*q)$$, invertendo a congruência.  
$$e \equiv b^{3d} mod(p*q)$$, usando a congruência da codificação.  
Sabemos que $$3d \equiv 1(mod (p-1)(q-1))$$, pela definição de inverso modular.  
$$3d=1+k*(p-1)(q-1)$$, $$k \in \mathbb{Z}$$  
$$b^{3d} = b^{1+k*(p-1)(q-1)} = bb^{k*(p-1)(q-1)}$$  

### Objetivo 1:  
Provar que $$b^{3d}\equiv b(modp)$$  

Se $$mdc(p,b)\not= 1$$:  
Como $$p$$ é primo, então $$b$$ deve ser múltiplo de $$p$$  
$$b \equiv 0 (modp)$$  
$$b^{3d} \equiv 0 (modp)$$  
$$b^{3d} \equiv b (modp)$$  

Se $$mdc(p,b)=1$$:  
$$b^{3d} = bb^{k*(p-1)(q-1)}$$  
$$b^{3d} = b(b^{p-1})^{k(q-1)}$$  
$$b(b^{p-1})^{k(q-1)} \equiv b*1^{k(q-1)}(modp)$$, pelo Teorema de Fermat  
$$b(b^{p-1})^{k(q-1)} \equiv b (modp)$$  
$$b^{3d} \equiv b(modp)$$  

Então provamos que $$b^{3d}\equiv b(modp)$$.  
Por raciocínio análogo, conseguimos provar também que $$b^{3d}\equiv b(modq)$$.  

Com isso, temos o sistema de congruências:  
$$x \equiv b(modp)$$  
$$x \equiv b(modq)$$  

$$x = t_{1}*p + b$$  
$$x = t_{2}*q + b$$  

$$x-b = t_{1}*p$$  
$$x-b = t_{2}*q$$  

$$x-b = t_{3}*p*q$$, pois $$p$$ e $$q$$ são primos   
$$x \equiv b (modp*q)$$  
$$b^{3d} \equiv b(modp*q)$$  
$$e \equiv b(modp*q)$$  

Como $$1 \leq b \leq p*q$$ e $$1 \leq e \leq p*q$$, então  
$$e = b$$

Portanto, está provado que a decodificação devolve o número original antes da codificação, ou seja, o método RSA funciona.
