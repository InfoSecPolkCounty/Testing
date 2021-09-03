function FindProxyForURL(url, host)
{
      javascript&colon;alert ("Inside the function");
	  
	  if (isInNet(host, "255.255.254.0", "255.255.254.0")) 
	  {
		  javascript&colon;alert ("Inside 1st if");
		  return "PROXY 10.49.217.162:80";
      }
      if (isInNet(host, "210.0.0.0", "255.0.0.0")) 
      {
		  javascript&colon;alert ("Inside 2nd if");
		  return "PROXY 10.49.217.162:80";
      }
	  else return "DIRECT";
}
