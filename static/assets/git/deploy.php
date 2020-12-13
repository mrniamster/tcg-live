<?php
include('phpseclib/Net/SSH2.php');
include('phpseclib/Math/BigInteger.php');
include('phpseclib/Crypt/Random.php');
include('phpseclib/Crypt/Hash.php');
include('phpseclib/Crypt/Base.php');
include('phpseclib/Crypt/RC4.php');
include('phpseclib/Crypt/Rijndael.php');
include('phpseclib/Crypt/Twofish.php');
include('phpseclib/Crypt/Blowfish.php');
include('phpseclib/Crypt/TripleDES.php');

$ssh = new Net_SSH2('home260181950.1and1-data.host');
if (!$ssh->login('u50826507', '0Shop-123')) {
    exit('Login Failed');
}

echo $ssh->exec('cd thirdculturegroup.com && ls');
?>