select * from house
join products on cart.product_id = products.id
order by products.id