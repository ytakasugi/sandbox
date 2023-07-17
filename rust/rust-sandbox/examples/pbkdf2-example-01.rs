use hex_literal::hex;
use pbkdf2::{pbkdf2_hmac, pbkdf2_hmac_array};
use sha2::Sha256;

fn main() {
    let password = b"password";
    let salt = b"salt";

    let n = 600_000;
    let expected = hex!("669cfe52482116fda1aa2cbe409b2f56c8e45637");

    let mut key1 = [0u8; 20];
    pbkdf2_hmac::<Sha256>(password, salt, n, &mut key1);
    dbg!(key1);
    assert_eq!(key1, expected);

    let key2 = pbkdf2_hmac_array::<Sha256, 20>(password, salt, n);
    dbg!(key2);
    assert_eq!(key2, expected);
}
