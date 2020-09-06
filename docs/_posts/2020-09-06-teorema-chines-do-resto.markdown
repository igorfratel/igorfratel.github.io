---
layout: single
author_profile: true
title:  "Teorema Chinês do Resto"
date: 2020-09-06 15:52:00 -0300
categories: jekyll update
usemathjax: true
---

Sejam $$m_{1}, m_{2}, m_{3}\dots m_{k}$$ inteiros positivos primos dois a dois.  
Então o sistema:  
$$x \equiv A_{1}(mod m_{1})$$  
$$x \equiv A_{2}(mod m_{2})$$  
$$x \equiv A_{3}(mod m_{3})$$  
$$\dots$$  
$$x \equiv A_{k}(mod m_{k})$$  
tem solução única $$(mod 1*2*3*\dots *k)$$  

Essa solução é dada por:  
$$x=A_{1}M_{1}\overline{M_{1}}^{-1} + A_{2}M_{2}\overline{M_{2}}^{-1} + \dots + A_{k}M_{k}\overline{M_{k}}^{-1}$$  

Onde:  
$$M_{i} = m_{1}*m_{2}*\dots*m_{i-1}*m_{i+1}*\dots*m_{k}$$ (ou seja, pula o $$m_{i})$$  
$$\overline{M_{i}} = M_{i}(mod m_{i})$$  
$$\overline{M_{i}}^{-1}$$ é o inverso multiplicativo de $$\overline{M_{i}}$$ módulo $$m_{i}$$,  
ou seja, o número tal que $$\overline{M_{i}}*\overline{M_{i}}^{-1}\ \equiv 1(modm_{1})$$

Com um sistema de três congruências, teríamos que $$x$$ vale:  
$$\\ A_{1}m_{2}m_{3}(m_{2}m_{3}mod(m_{1}))^{-1}\\ +  
A_{2}m_{1}m_{3}(m_{1}m_{3}mod(m_{2}))^{-1}\\ +  
A_{3}m_{1}m_{2}(m_{1}m_{2}mod(m_{3}))^{-1}$$  

A forma usual de calcular essa equação é preencher uma tabela com as colunas $$A$$, $$M$$, $$\overline{M}$$, $$\overline{M}^{-1}$$ e $$A*M*\overline{M}^{-1}$$ de cada congruência e depois somar os resultados da coluna $$A*M*\overline{M}^{-1}$$.

### Prova de que o $$x$$ sugerido realmente resolve o sistema (satisfaz todas as congruências):  
Vamos aplicar o valor de $$x$$ na primeira equação. As outras saem de forma idêntica.  
Queremos provar que $$x \equiv A_{1}(mod m_{1})$$  
$$x = A_{1}M_{1}\overline{M_{1}}^{-1} + A_{2}M_{2}\overline{M_{2}}^{-1} + \dots + A_{k}M_{k}\overline{M_{k}}^{-1}$$  
$$x \equiv A_{1}M_{1}\overline{M_{1}}^{-1}(mod m_{1})$$, pois todos os $$M_{i}$$ são múltiplos de $$m_{1}$$, exceto o próprio $$M_{1}$$, então os outros termos somem na divisão por $$m_{1}$$.    
Por exemplo, $$M_{2} = \boldsymbol{m_{1}}*m_{3}*\dots *m_{k}$$, portanto  
$$A_{2}M_{2}\overline{M_{2}}^{-1} \equiv 0(modm_{1})$$.  
$$x \equiv A_{1}(mod m_{1})$$, pois $$M_{1}\overline{M_{1}}^{-1}$$ são inversos multiplicativos, ou seja,  
$$M_{1}\overline{M_{1}}^{-1} \equiv 1(mod m_{1})$$, então podemos cancelá-los.  
Então está provado que o valor de $$x$$ satisfaz a primeira equação.  