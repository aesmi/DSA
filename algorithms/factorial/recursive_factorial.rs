// create our own ternary function
macro_rules! ternary {
    ($test:expr => $true_expr:expr; $false_expr:expr) => {
        if $test {
            $true_expr
        }
        else {
            $false_expr
        }
    }
}

//
fn factorial(num:u128){
    ternary!(num==1 => return(1); return factorial(num));
}

fn main(){
    println!("{}", factorial(999));
}