## US Income Calculator
#### A political sentiment API

### About


Monroe aggregates Twitter and news content and performs sentiment analysis while building associations between collected content and a database of federal politicians. Monroe also collects voting records and bill sponsorships (source: New York Times) for all politicians that are being tracked. 

### Access & Configuration

There are currently three endpoints accessible from this wrapper:

  Monroe::Articles
  Monroe::Tweets
  Monroe::Records
  Monroe::Bills

To access the data from these endpoints, you will first need to request an API key and configure the client with this key. If you do not already have a key, you can generate one by querying the API's generator endpoint with your email as a parameter:

  www.monroeapi.com/api_key?email=your_email@example.com

Once you have your key, you can configure the client by setting the key in an initializer file of simply at the top of your program:

  Monroe.key = YOUR_API_KEY

Once the key is configured, you're good to go. Refer to the following documentation to access each endpoint.

### Gem

Please visit https://github.com/bengwinter/monroe_gem for a Ruby Gem for all endpoints (Github page includes gem documentation)

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

####This API is maintained by:
[bengwinter](https://github.com/bengwinter)
[blakeruddock](https://github.com/blakeruddock)
[brycelambert](https://github.com/brycelambert)
