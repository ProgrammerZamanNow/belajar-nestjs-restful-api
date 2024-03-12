# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization: token

Request Body :

```json
{
  "street" : "Jalan Contoh, optional",
  "city" : "Kota, optional",
  "province" : "Provinsi, optional",
  "country" : "Negara Apa",
  "postal_code" : "123123" 
}
```

Response Body

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional",
    "city" : "Kota, optional",
    "province" : "Provinsi, optional",
    "country" : "Negara Apa",
    "postal_code" : "123123"
  } 
}
```

## Get Address

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization: token

Response Body

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional",
    "city" : "Kota, optional",
    "province" : "Provinsi, optional",
    "country" : "Negara Apa",
    "postal_code" : "123123"
  } 
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization: token

Request Body :

```json
{
  "street" : "Jalan Contoh, optional",
  "city" : "Kota, optional",
  "province" : "Provinsi, optional",
  "country" : "Negara Apa",
  "postal_code" : "123123" 
}
```

Response Body

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Contoh, optional",
    "city" : "Kota, optional",
    "province" : "Provinsi, optional",
    "country" : "Negara Apa",
    "postal_code" : "123123"
  } 
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization: token

Response Body

```json
{
  "data" : true
}
```

## List Addresses

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization: token

Response Body

```json
{
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan Contoh, optional",
      "city" : "Kota, optional",
      "province" : "Provinsi, optional",
      "country" : "Negara Apa",
      "postal_code" : "123123"
    },
    {
      "id" : 2,
      "street" : "Jalan Contoh, optional",
      "city" : "Kota, optional",
      "province" : "Provinsi, optional",
      "country" : "Negara Apa",
      "postal_code" : "123123"
    }
  ]
}
```
