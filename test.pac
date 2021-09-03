function FindProxyForURL(url, host)
{
      javascript&colon;alert ("Inside the function");
	  host=192.168.91.98
	  if (isInNet(host, "192.168.90.0", "192.168.91.255")) 
	  {
		  javascript&colon;alert ("Inside 1st if");
		  return "PROXY 127.0.0.1:80";
      }
      if (isInNet(host, "210.0.0.0", "255.0.0.0")) 
      {
		  javascript&colon;alert ("Inside 2nd if");
		  return "PROXY 10.49.217.162:80";
      }
	  else return "DIRECT";
}
